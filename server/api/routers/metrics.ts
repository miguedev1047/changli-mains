import { db } from '@/server/db'
import { publicProcedure, router } from '@/server/api/trpc'

export const metricsRouter = router({
  data: publicProcedure.query(async () => {
    const promises = [
      db.query.characters.findMany(),
      db.query.weapons.findMany(),
      db.query.materials.findMany(),
      db.query.echoes.findMany(),
      db.query.teams.findMany(),
    ]

    const metricsData = await Promise.all(promises)

    const formattedMetricsData = metricsData.map((data) => ({
      count: data.length,
    }))

    return formattedMetricsData
  }),
})
