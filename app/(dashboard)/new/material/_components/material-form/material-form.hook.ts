import { trpc } from '@/app/_trpc/client'
import { invalidateQuery } from '@/helpers/invalidate-query'
import { materialSchema, MaterialSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const DEFAULT_VALUES: MaterialSchema = {
  name: '',
  description: '',
  icon_image: '',
  rarity: '',
  is_new: false,
  is_public: false,
}

export function useMaterialForm() {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const materialMutationOpts = trpc.materials.create.mutationOptions()
  const materialMutation = useMutation(materialMutationOpts)
  const materialQueryKey = trpc.materials.getAll.queryKey()

  const form = useForm<MaterialSchema>({
    resolver: zodResolver(materialSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    const { success, message } = await materialMutation.mutateAsync(values)

    if (!success) return toast.error(message)

    invalidateQuery(materialQueryKey, queryClient)
    toast.success(message)
    push('/dashboard/materials')
  })

  return { form, isSubmitting, onSubmit }
}
