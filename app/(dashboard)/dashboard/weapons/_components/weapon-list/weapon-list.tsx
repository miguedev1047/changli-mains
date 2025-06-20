'use client'

import { WeaponCard } from '@/components/cards/weapon-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { trpc } from '@/trpc/react'
import { filterWeapons } from '@/utils/weapons'
import { useSearchParams } from 'next/navigation'

export function WeaponList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const [weapons] = trpc.weapons.getAll.useSuspenseQuery()
  const filteredWeapons = filterWeapons(weapons, queryParams)

  const weaponList = filteredWeapons?.map((weapon) => (
    <li
      key={`${weapon.id}-${weapon.name}`}
      className='relative'
    >
      <WeaponCard
        data={weapon}
        showDeleteButton
        showWeaponIcon
      />
    </li>
  ))

  return (
    <TooltipProvider>
      <ul className='grid @5xl/main:grid-cols-10 @4xl/main:grid-cols-8 @3xl/main:grid-cols-6 @lg/main:grid-cols-3 grid-cols-2 gap-4'>
        {weaponList}
      </ul>
    </TooltipProvider>
  )
}
