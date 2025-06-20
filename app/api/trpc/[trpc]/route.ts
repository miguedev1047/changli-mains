import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/server/api/root'
import { type NextRequest } from 'next/server'
import { createTRPCContext } from '@/server/api/trpc'

const createContext = async (req: NextRequest) => {
  return createTRPCContext({ headers: req.headers })
}

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            const errorMessage = `❌ tRPC failed on ${path ?? '<no-path>'}: ${
              error.message
            }`
            console.error(errorMessage)
          }
        : undefined,
  })

export { handler as GET, handler as POST }
