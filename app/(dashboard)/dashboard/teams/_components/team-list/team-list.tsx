'use client'

import { trpc } from '@/app/_trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { filterTeams } from '@/utils/teams'
import { TeamCard } from '@/components/cards/team-card/team-card'

export function TeamList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const teamQueryOpts = trpc.teams.getAll.queryOptions()
  const { data: teams } = useSuspenseQuery(teamQueryOpts)

  const filteredTeams = filterTeams(teams, queryParams)

  const teamList = filteredTeams.map((team) => (
    <li key={team.id}>
      <TeamCard
        data={team}
        showDeleteButton
      />
    </li>
  ))

  return <ul className='grid @3xl/main:grid-cols-2 gap-4'>{teamList}</ul>
}
