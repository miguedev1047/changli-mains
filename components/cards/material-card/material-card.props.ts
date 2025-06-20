import { RouterOutputs } from '@/trpc/react'

export type MaterialCardProps = {
  data: RouterOutputs['materials']['getUnique']
  showDeleteButton?: boolean
}
