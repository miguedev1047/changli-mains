import { type trpc } from '@/app/_trpc/client'
import { type inferOutput } from '@trpc/tanstack-react-query'

export type WeaponCardProps = {
  data: inferOutput<typeof trpc.weapons.getUnique>
  showDeleteButton?: boolean
  showWeaponIcon?: boolean
}
