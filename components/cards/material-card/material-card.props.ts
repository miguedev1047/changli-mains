import { type trpc } from '@/app/_trpc/client'
import { type inferOutput } from '@trpc/tanstack-react-query'

export type MaterialCardProps = {
  data: inferOutput<typeof trpc.materials.getUnique>
  showDeleteButton?: boolean
}
