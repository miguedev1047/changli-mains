'use client'

import { trpc } from '@/app/_trpc/client'
import { WeaponCard } from '@/components/cards/weapon-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { filterWeapons } from '@/utils/weapons'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function WeaponList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const weaponQueryOpts = trpc.weapons.getAll.queryOptions()
  const { data: weapons } = useSuspenseQuery(weaponQueryOpts)

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
      <ul className='grid @5xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/main:grid-cols-3 @lg/main:grid-cols-2 grid-cols-2 gap-4'>
        {weaponList}
      </ul>
    </TooltipProvider>
  )
}
