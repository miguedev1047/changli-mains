'use client'

import { useQuery } from '@tanstack/react-query'
import { trpc } from '@/app/_trpc/client'

export function View() {
  const {
    data: characters,
    isLoading,
    error,
  } = useQuery(trpc.characters.getAll.queryOptions())

  if (isLoading) return <div>Loading...</div>
  
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <pre>
        <code>{JSON.stringify(characters, null, 2)}</code>
      </pre>
    </div>
  )
}
