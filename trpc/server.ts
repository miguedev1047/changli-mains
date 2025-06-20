import 'server-only'

import { createHydrationHelpers } from '@trpc/react-query/rsc'
import { headers } from 'next/headers'
import { cache } from 'react'
import { createQueryClient } from '@/trpc/query-client'
import { AppRouter, createCaller } from '@/server/api/root'
import { createTRPCContext } from '@/server/api/trpc'

const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-trpc-source', 'rsc')

  return createTRPCContext({ headers: heads })
})

const getQueryClient = cache(createQueryClient)
const caller = createCaller(createContext)

export const { trpc, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
)
