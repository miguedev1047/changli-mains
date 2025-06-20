import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { echoSchema, EchoSchema } from '@/schemas'
import { trpc } from '@/trpc/react'

const DEFAULT_VALUES = {
  name: '',
  description_skill: '',
  icon_image: '',
  class_type: '',
  cost: '',
  is_new: false,
  is_public: false,
  echoes_sets: [],
}

export function useEchoForm() {
  const form = useForm<EchoSchema>({
    resolver: zodResolver(echoSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { push } = useRouter()
  const utils = trpc.useUtils()

  const createEcho = trpc.echoes.create.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.echoes.invalidate()
      push('/dashboard/echoes')
    },
  })

  const isSubmitting = createEcho.isPending

  const onSubmit = form.handleSubmit((values) => {
    createEcho.mutate(values)
  })

  return { form, isSubmitting, onSubmit }
}
