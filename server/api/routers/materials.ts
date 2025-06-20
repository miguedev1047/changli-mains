import { eq } from 'drizzle-orm'
import { db } from '@/server/db'
import { publicProcedure, protectedProcedure, router } from '@/server/api/trpc'
import { materialSchema, recordIdSchema, recordNameSchema } from '@/schemas'
import { materials } from '@/server/db/schema/materials'
import { createId } from '@paralleldrive/cuid2'

export const materialsRouter = router({
  getAll: publicProcedure.query(async () => {
    try {
      const materials = await db.query.materials.findMany()
      return materials
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
      const material = await db.query.materials.findFirst({
        with: { roles: true },
        where: (material, { eq }) => eq(material.id, id),
      })
      return material
    } catch {
      return null
    }
  }),

  getByName: publicProcedure
    .input(recordNameSchema)
    .query(async ({ input }) => {
      const VALIDATION = recordNameSchema.safeParse(input)

      if (!VALIDATION.success) {
        return null
      }

      const { name } = VALIDATION.data

      try {
        const material = await db.query.materials.findFirst({
          with: { roles: true },
          where: (material, { eq }) => eq(material.name, name),
        })
        return material
      } catch {
        return null
      }
    }),

  create: protectedProcedure
    .input(materialSchema)
    .mutation(async ({ input }) => {
      const materialId = createId()
      const now = new Date()

      const VALIDATION = materialSchema.safeParse(input)

      if (!VALIDATION.success) {
        return { success: false, message: 'Datos invalidos!' }
      }

      const { name, description, icon_image, is_new, rarity, is_public } =
        VALIDATION.data

      try {
        await db.insert(materials).values({
          id: materialId,
          name,
          description,
          rarity,
          icon_image,
          is_new,
          is_public,
          createdAt: now,
          updatedAt: now,
        })

        return { success: true, message: 'Material creado correctamente!' }
      } catch {
        return { success: false, message: 'Error al crear el material!' }
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
        await db.delete(materials).where(eq(materials.id, id))
        return { success: true, message: 'Material eliminado correctamente!' }
      } catch {
        return { success: false, message: 'Error al eliminar el material!' }
      }
    }),
})
