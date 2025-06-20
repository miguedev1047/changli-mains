import { trpc } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useDeleteTeam(id: string) {
  const utils = trpc.useUtils()

  const deleteTeam = trpc.teams.delete.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.teams.invalidate()
    },
  })

  const isPending = deleteTeam.isPending

  const onDeleteTeam = () => deleteTeam.mutate({ id })

  return { onDeleteTeam, isPending }
}

export function useTeamNavigation(id: string) {
  const { push } = useRouter()

  const goToTeamEditPage = () => {
    push(`/edit/team/${id}`)
  }

  return { goToTeamEditPage }
}
