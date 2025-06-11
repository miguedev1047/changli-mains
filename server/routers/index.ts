import { publicProcedure, router } from '@/server/trpc'
import { charactersRouter } from '@/server/routers/characters'

export const appRouter = router({
  getPublicData: publicProcedure.query(async () => {
    return { message: 'Hello from tRPC' }
  }),
  characters: charactersRouter,
})

export type AppRouter = typeof appRouter
