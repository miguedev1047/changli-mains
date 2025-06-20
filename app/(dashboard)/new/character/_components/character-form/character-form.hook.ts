import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { characterSchema, CharacterSchema } from '@/schemas'
import { trpc } from '@/trpc/react'

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
  const form = useForm<CharacterSchema>({
    resolver: zodResolver(characterSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { push } = useRouter()
  const utils = trpc.useUtils()

  const createCharacter = trpc.characters.create.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.characters.invalidate()
      push('/dashboard/characters')
    },
  })

  const isSubmitting = createCharacter.isPending

  const onSubmit = form.handleSubmit((values) => {
    createCharacter.mutate(values)
  })

  return { form, isSubmitting, onSubmit }
}
