import { createCallerFactory, router } from '@/server/api/trpc'
import { charactersRouter } from '@/server/api/routers/characters'
import { weaponsRouter } from '@/server/api/routers/weapons'
import { echoesRouter } from '@/server/api/routers/echoes'
import { materialsRouter } from '@/server/api/routers/materials'
import { teamsRouter } from '@/server/api/routers/team'
import { metricsRouter } from '@/server/api/routers/metrics'

export const appRouter = router({
  characters: charactersRouter,
  weapons: weaponsRouter,
  echoes: echoesRouter,
  materials: materialsRouter,
  teams: teamsRouter,
  metrics: metricsRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
