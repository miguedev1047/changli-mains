import { createTRPCClient, httpBatchLink } from '@trpc/client'

import { type AppRouter } from '@/server/routers'
import { QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import { CACHE_EXPIRATION_TIME } from '@/constants/misc'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message, {
        action: {
          label: 'retry',
          onClick: () => {
            queryClient.invalidateQueries()
          },
        },
      })
    },
  }),
  defaultOptions: {
     queries: {
      staleTime: CACHE_EXPIRATION_TIME,
     }
  }
})

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        })
      }
    }),
  ],
})

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
})
