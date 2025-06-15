import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { characterSchema, CharacterSchema } from '@/schemas'
import { trpc } from '@/app/_trpc/client'
import { invalidateQuery } from '@/helpers/invalidate-query'

const DEFAULT_VALUES = {
  name: '',
  description: '',
  element_type: '',
  image: '',
  splash_image: '',
  icon_image: '',
  rarity: '',
  weapon_type: '',
  is_new: false,
  is_public: false,
  combat_styles: [],
}

export function useCharacterForm() {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const characterMutationOpts = trpc.characters.create.mutationOptions()
  const characterMutation = useMutation(characterMutationOpts)
  const characterQueryKey = trpc.characters.getAll.queryKey()

  const form = useForm<CharacterSchema>({
    resolver: zodResolver(characterSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    const { success, message } = await characterMutation.mutateAsync(values)

    if (!success) return toast.error(message)

    invalidateQuery(characterQueryKey, queryClient)
    toast.success(message)
    push('/dashboard/characters')
  })

  return { form, isSubmitting, onSubmit }
}
