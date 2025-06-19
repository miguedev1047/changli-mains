import { type trpc } from '@/app/_trpc/client'
import { type inferOutput } from '@trpc/tanstack-react-query'

export type TeamCardProps = {
  data: inferOutput<typeof trpc.teams.getUnique>
  showDeleteButton?: boolean
}
