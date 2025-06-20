import { type RouterOutputs } from '@/trpc/react'

export type WeaponCardProps = {
  data: RouterOutputs['weapons']['getUnique']
  showDeleteButton?: boolean
  showWeaponIcon?: boolean
}