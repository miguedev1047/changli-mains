'use client'

import { useSearchParams } from 'next/navigation'
import { filterTeams } from '@/utils/teams'
import { TeamCard } from '@/components/cards/team-card/team-card'
import { trpc } from '@/trpc/react'

export function TeamList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const [teams] = trpc.teams.getAll.useSuspenseQuery()
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
