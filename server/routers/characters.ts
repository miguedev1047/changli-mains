import { publicProcedure, router } from '@/server/trpc'
import { db } from '@/server/db'

export const charactersRouter = router({
  getAll: publicProcedure.query(async () => {
    const characters = await db.query.characters.findMany()
    return { characters }
  }),
})
