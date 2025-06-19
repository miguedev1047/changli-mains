import { trpc } from '@/app/_trpc/client'
import { invalidateQuery } from '@/helpers/invalidate-query'
import { teamSchema, TeamSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const DEFAULT_VALUES: TeamSchema = { characters: [], name: '' }

export function useTeamForm() {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const teamMutationOpts = trpc.teams.create.mutationOptions()
  const teamMutation = useMutation(teamMutationOpts)
  const teamQueryKey = trpc.teams.getAll.queryKey()

  const form = useForm<TeamSchema>({
    resolver: zodResolver(teamSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    const { success, message } = await teamMutation.mutateAsync(values)

    if (!success) return toast.error(message)

    invalidateQuery(teamQueryKey, queryClient)
    toast.success(message)
    push('/dashboard/teams')
  })

  return { form, isSubmitting, onSubmit }
}

export function useOptsQuery() {
  const charactersQueryOpts = trpc.characters.getAll.queryOptions() as never
  return { charactersQueryOpts }
}
