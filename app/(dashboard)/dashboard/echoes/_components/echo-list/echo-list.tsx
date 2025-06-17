'use client'

import { trpc } from '@/app/_trpc/client'
import { EchoCard } from '@/components/cards/echo-card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { filterEchoes } from '@/utils/echoes'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function EchoList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const echoQueryOpts = trpc.echoes.getAll.queryOptions()
  const { data: echoes } = useSuspenseQuery(echoQueryOpts)

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
      <ul className='grid @5xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/main:grid-cols-3 @lg/main:grid-cols-2 grid-cols-2 gap-4'>
        {echoList}
      </ul>
    </TooltipProvider>
  )
}
