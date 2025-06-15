import { type QueryClient } from '@tanstack/react-query'
import { type TRPCQueryKey } from '@trpc/tanstack-react-query'

export function invalidateQuery(key: TRPCQueryKey, queryClient: QueryClient) {
  return queryClient.invalidateQueries({ queryKey: key })
}