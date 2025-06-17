import { type trpc } from '@/app/_trpc/client'
import { type inferOutput } from '@trpc/tanstack-react-query'

export type EchoCardProps = {
  data: inferOutput<typeof trpc.echoes.getUnique>
  showDeleteButton?: boolean
  showEchoIcons?: boolean
}
