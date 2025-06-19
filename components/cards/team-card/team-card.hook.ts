import { trpc } from '@/app/_trpc/client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useDeleteTeam(id: string) {
  const teamMutationOpts = trpc.teams.delete.mutationOptions()
  const teamMutation = useMutation(teamMutationOpts)
  const teamQueryKey = trpc.teams.getAll.queryKey()

  const onDeleteTeam = async () => {
    return await teamMutation.mutateAsync({ id })
  }

  return { onDeleteTeam, teamQueryKey }
}

export function useTeamNavigation(id: string) {
  const { push } = useRouter()

  const goToTeamEditPage = () => {
    push(`/edit/team/${id}`)
  }

  return { goToTeamEditPage }
}
