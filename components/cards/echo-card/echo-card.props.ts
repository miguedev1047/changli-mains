import { RouterOutputs } from '@/trpc/react'

export type EchoCardProps = {
  data: RouterOutputs['echoes']['getUnique']
  showDeleteButton?: boolean
  showEchoIcons?: boolean
}
