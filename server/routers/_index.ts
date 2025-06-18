import { router } from '@/server/trpc'
import { charactersRouter } from '@/server/routers/characters'
import { weaponsRouter } from '@/server/routers/weapons'
import { echoesRouter } from '@/server/routers/echoes'
import { materialsRouter } from '@/server/routers/materials'

export const appRouter = router({
  characters: charactersRouter,
  weapons: weaponsRouter,
  echoes: echoesRouter,
  materials: materialsRouter,
})

export type AppRouter = typeof appRouter
