import { materialSchema, MaterialSchema } from '@/schemas'
import { trpc } from '@/trpc/react'
import { zodResolver } from '@hookform/resolvers/zod'
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
  const form = useForm<MaterialSchema>({
    resolver: zodResolver(materialSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { push } = useRouter()
  const utils = trpc.useUtils()

  const createMaterial = trpc.materials.create.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.materials.invalidate()
      push('/dashboard/materials')
    },
  })

  const isSubmitting = createMaterial.isPending

  const onSubmit = form.handleSubmit((values) => {
    createMaterial.mutate(values)
  })

  return { form, isSubmitting, onSubmit }
}
