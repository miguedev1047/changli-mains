import { router } from '@/server/trpc'
import { charactersRouter } from '@/server/routers/characters'
import { weaponsRouter } from '@/server/routers/weapons'
import { echoesRouter } from '@/server/routers/echoes'
import { materialsRouter } from '@/server/routers/materials'
import { teamsRouter } from '@/server/routers/team'

export const appRouter = router({
  characters: charactersRouter,
  weapons: weaponsRouter,
  echoes: echoesRouter,
  materials: materialsRouter,
  teams: teamsRouter,
})

export type AppRouter = typeof appRouter
