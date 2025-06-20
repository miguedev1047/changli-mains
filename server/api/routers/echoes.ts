import { eq } from 'drizzle-orm'
import { db } from '@/server/db'
import { publicProcedure, protectedProcedure, router } from '@/server/api/trpc'
import { echoSchema, recordIdSchema, recordNameSchema } from '@/schemas'
import { createId } from '@paralleldrive/cuid2'
import { DEFAULT_ZERO } from '@/constants/misc'
import { echoes, echoesSets } from '@/server/db/schema/echoes'

export const echoesRouter = router({
  getAll: publicProcedure.query(async () => {
    try {
      const echoes = await db.query.echoes.findMany({
        with: { sets: true },
      })
      return echoes
    } catch {
      return null
    }
  }),

  getUnique: publicProcedure.input(recordIdSchema).query(async ({ input }) => {
    const VALIDATION = recordIdSchema.safeParse(input)

    if (!VALIDATION.success) {
      return null
    }

    const { id } = VALIDATION.data

    try {
      const echo = await db.query.echoes.findFirst({
        with: { sets: true },
        where: (echo, { eq }) => eq(echo.id, id),
      })
      return echo
    } catch {
      return null
    }
  }),

  getName: publicProcedure.input(recordNameSchema).query(async ({ input }) => {
    const VALIDATION = recordNameSchema.safeParse(input)

    if (!VALIDATION.success) {
      return null
    }

    const { name } = VALIDATION.data

    try {
      const echo = await db.query.echoes.findFirst({
        with: { sets: true },
        where: (echo, { eq }) => eq(echo.name, name),
      })
      return echo
    } catch {
      return null
    }
  }),

  create: protectedProcedure.input(echoSchema).mutation(async ({ input }) => {
    const echoId = createId()
    const now = new Date()

    const VALIDATION = echoSchema.safeParse(input)

    if (!VALIDATION.success) {
      return { success: false, message: 'Datos invalidos!' }
    }

    const {
      name,
      class_type,
      cost,
      description_skill,
      echoes_sets,
      icon_image,
      is_new,
      is_public,
    } = VALIDATION.data

    if (echoes_sets.length <= DEFAULT_ZERO) {
      return {
        success: false,
        message: 'Debes seleccionar al menos un conjunto de echo!',
      }
    }

    try {
      await db.insert(echoes).values({
        id: echoId,
        name,
        class_type,
        cost,
        description_skill,
        icon_image,
        is_new,
        is_public,
        createdAt: now,
        updatedAt: now,
      })

      const echoSets = echoes_sets.map((item) => ({
        id: createId(),
        echoId: echoId,
        echoSet: item.value,
        createdAt: now,
        updatedAt: now,
      }))

      await db.insert(echoesSets).values(echoSets)

      return { success: true, message: 'Eco creado correctamente!' }
    } catch (error) {
      console.log(error)
      return { success: false, message: 'Error al crear el eco!' }
    }
  }),

  delete: protectedProcedure
    .input(recordIdSchema)
    .mutation(async ({ input }) => {
      const VALIDATION = recordIdSchema.safeParse(input)

      if (!VALIDATION.success) {
        return { success: false, message: 'Proporciona un ID!' }
      }

      const { id } = VALIDATION.data

      try {
        await db.delete(echoes).where(eq(echoes.id, id))
        return { success: true, message: 'Eco eliminado correctamente!' }
      } catch {
        return { success: false, message: 'Error al eliminar el eco!' }
      }
    }),
})
