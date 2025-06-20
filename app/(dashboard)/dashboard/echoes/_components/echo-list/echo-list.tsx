'use client'

import { EchoCard } from '@/components/cards/echo-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { trpc } from '@/trpc/react'
import { filterEchoes } from '@/utils/echoes'
import { useSearchParams } from 'next/navigation'

export function EchoList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const [echoes] = trpc.echoes.getAll.useSuspenseQuery()
  const filteredEchoes = filterEchoes(echoes, queryParams)

  const echoList = filteredEchoes?.map((echo) => (
    <li
      key={`${echo.id}-${echo.name}`}
      className='relative'
    >
      <EchoCard
        data={echo}
        showDeleteButton
        showEchoIcons
      />
    </li>
  ))

  return (
    <TooltipProvider>
      <ul className='grid @6xl/main:grid-cols-10 @5xl/main:grid-cols-8 @4xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/ @lg/main:grid-cols-2 grid-cols-2 gap-4'>
        {echoList}
      </ul>
    </TooltipProvider>
  )
}
