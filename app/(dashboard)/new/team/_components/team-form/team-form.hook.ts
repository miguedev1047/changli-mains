import { teamSchema, TeamSchema } from '@/schemas'
import { trpc } from '@/trpc/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const DEFAULT_VALUES: TeamSchema = { characters: [], name: '' }

export function useTeamForm() {
  const form = useForm<TeamSchema>({
    resolver: zodResolver(teamSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { push } = useRouter()
  const utils = trpc.useUtils()

  const createTeam = trpc.teams.create.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.teams.invalidate()
      push('/dashboard/teams')
    },
  })

  const isSubmitting = createTeam.isPending

  const onSubmit = form.handleSubmit((values) => createTeam.mutate(values))

  return { form, isSubmitting, onSubmit }
}

export function useOptsQuery() {
  const charactersQuery = trpc.characters.getAll.useQuery() as never
  return { charactersQuery }
}
