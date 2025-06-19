import { trpc } from '@/app/_trpc/client'
import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { inferOutput } from '@trpc/tanstack-react-query'

type TeamsProps = inferOutput<typeof trpc.teams.getAll>
type Filters = { [k: string]: string }

export function filterTeams(teams: TeamsProps, filters: Filters) {
  if (!teams) return []

  const { name } = filters

  return teams.filter((item) => {
    const matcher = [
      name ? lowerCaseFunc(item.name).includes(lowerCaseFunc(name)) : true,
    ]

    return matcher.every(Boolean)
  })
}
