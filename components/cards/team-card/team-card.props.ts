import { type RouterOutputs } from '@/trpc/react'

export type TeamCardProps = {
  data: RouterOutputs['teams']['getUnique']
  showDeleteButton?: boolean
}
