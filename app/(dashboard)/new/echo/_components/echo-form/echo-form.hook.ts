import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { echoSchema, EchoSchema } from '@/schemas'
import { trpc } from '@/app/_trpc/client'
import { invalidateQuery } from '@/helpers/invalidate-query'

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
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const echoMutationOpts = trpc.echoes.create.mutationOptions()
  const echoMutation = useMutation(echoMutationOpts)
  const echoQueryKey = trpc.echoes.getAll.queryKey()

  const form = useForm<EchoSchema>({
    resolver: zodResolver(echoSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    const { success, message } = await echoMutation.mutateAsync(values)

    if (!success) return toast.error(message)

    invalidateQuery(echoQueryKey, queryClient)
    toast.success(message)
    push('/dashboard/echoes')
  })

  return { form, isSubmitting, onSubmit }
}
