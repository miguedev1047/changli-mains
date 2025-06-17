import { trpc } from '@/app/_trpc/client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useDeleteEcho(id: string) {
  const echoMutationOpts = trpc.echoes.delete.mutationOptions()
  const echoMutation = useMutation(echoMutationOpts)
  const echoQueryKey = trpc.echoes.getAll.queryKey()

  const onDeleteEcho = async () => {
    return await echoMutation.mutateAsync({ id })
  }

  return { onDeleteEcho, echoQueryKey }
}

export function useEchoNavigation(id: string) {
  const { push } = useRouter()

  const goToEchoEditPage = () => {
    push(`/edit/echo/${id}`)
  }

  return { goToEchoEditPage }
}
