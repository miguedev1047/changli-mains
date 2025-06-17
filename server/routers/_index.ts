import { router } from '@/server/trpc'
import { charactersRouter } from '@/server/routers/characters'
import { weaponsRouter } from '@/server/routers/weapons'
import { echoesRouter } from '@/server/routers/echoes'

export const appRouter = router({
  characters: charactersRouter,
  weapons: weaponsRouter,
  echoes: echoesRouter,
})

export type AppRouter = typeof appRouter
