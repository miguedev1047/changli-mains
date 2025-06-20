import { trpc } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useDeleteEcho(id: string) {
  const utils = trpc.useUtils()

  const deleteEcho = trpc.echoes.delete.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.echoes.invalidate()
    },
  })

  const isPending = deleteEcho.isPending

  const onDeleteEcho = () => deleteEcho.mutate({ id })

  return { onDeleteEcho, isPending }
}

export function useEchoNavigation(id: string) {
  const { push } = useRouter()

  const goToEchoEditPage = () => {
    push(`/edit/echo/${id}`)
  }

  return { goToEchoEditPage }
}
