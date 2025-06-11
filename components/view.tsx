'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { trpc } from '@/app/_trpc/client'

export function View() {
  const { data: characters } = useSuspenseQuery(
    trpc.characters.getAll.queryOptions()
  )

  return (
    <div>
      <pre>
        <code>{JSON.stringify(characters, null, 2)}</code>
      </pre>
    </div>
  )
}
