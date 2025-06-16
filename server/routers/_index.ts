import { router } from '@/server/trpc'
import { charactersRouter } from '@/server/routers/characters'
import { weaponsRouter } from '@/server/routers/weapons'

export const appRouter = router({
  characters: charactersRouter,
  weapons: weaponsRouter
})

export type AppRouter = typeof appRouter
