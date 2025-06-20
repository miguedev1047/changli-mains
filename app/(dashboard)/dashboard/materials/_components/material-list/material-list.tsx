'use client'

import { MaterialCard } from '@/components/cards/material-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { trpc } from '@/trpc/react'
import { filterMaterials } from '@/utils/materials'
import { useSearchParams } from 'next/navigation'

export function MaterialList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const [materials] = trpc.materials.getAll.useSuspenseQuery()
  const filteredMaterials = filterMaterials(materials, queryParams)

  const materialList = filteredMaterials?.map((material) => (
    <li
      key={`${material.id}-${material.name}`}
      className='relative'
    >
      <MaterialCard
        data={material}
        showDeleteButton
      />
    </li>
  ))

  return (
    <TooltipProvider>
      <ul className='grid @6xl/main:grid-cols-10 @5xl/main:grid-cols-8 @4xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/ @lg/main:grid-cols-2 grid-cols-2 gap-4'>
        {materialList}
      </ul>
    </TooltipProvider>
  )
}
