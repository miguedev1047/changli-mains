import { db } from '@/server/db'
import { eq } from 'drizzle-orm'
import { createId } from '@paralleldrive/cuid2'
import { protectedProcedure, publicProcedure, router } from '@/server/trpc'
import { recordIdSchema, recordNameSchema, weaponSchema } from '@/schemas'
import { weapons } from '@/server/db/schema/weapons'

export const weaponsRouter = router({
  getAll: publicProcedure.query(async () => {
    try {
      const weapons = await db.query.weapons.findMany({
        orderBy: (weapons, { asc }) => asc(weapons.name),
      })
      return weapons
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
      const weapon = await db.query.weapons.findFirst({
        where: (weapon, { eq }) => eq(weapon.id, id),
        with: { roles: true },
      })
      return weapon
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
        const weapon = await db.query.weapons.findFirst({
          where: (weapon, { eq }) => eq(weapon.name, name),
          with: { roles: true },
        })
        return weapon
      } catch {
        return null
      }
    }),

  create: protectedProcedure.input(weaponSchema).mutation(async ({ input }) => {
    const weaponId = createId()
    const now = new Date()

    try {
      const VALIDATION = weaponSchema.safeParse(input)

      if (!VALIDATION.success) {
        return { success: false, message: 'Datos invalidos!' }
      }

      const {
        description,
        icon_image,
        name,
        rarity,
        weapon_type,
        is_new,
        is_public,
      } = VALIDATION.data

      await db.insert(weapons).values({
        id: weaponId,
        description,
        icon_image,
        name,
        rarity,
        weapon_type,
        is_new,
        is_public,
        createdAt: now,
        updatedAt: now,
      })

      return { success: true, message: 'Arma creada correctamente!' }
    } catch {
      return { success: false, message: 'Error al crear el arma!' }
    }
  }),

  update: protectedProcedure.input(weaponSchema).mutation(async ({ input }) => {
    const now = new Date()

    try {
      const VALIDATION = weaponSchema.safeParse(input)

      if (!VALIDATION.success) {
        return { success: false, message: 'Datos invalidos!' }
      }

      const {
        id,
        description,
        icon_image,
        name,
        rarity,
        weapon_type,
        is_new,
        is_public,
      } = VALIDATION.data

      if (!id) {
        return { success: false, message: 'ID inválido!' }
      }

      await db
        .update(weapons)
        .set({
          description,
          icon_image,
          name,
          rarity,
          weapon_type,
          is_new,
          is_public,
          updatedAt: now,
        })
        .where(eq(weapons.id, id))

      return { success: true, message: 'Arma editada correctamente!' }
    } catch {
      return { success: false, message: 'Error al crear el arma!' }
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
        await db.delete(weapons).where(eq(weapons.id, id))
        return { success: true, message: 'Arma eliminada correctamente!' }
      } catch {
        return { success: false, message: 'Error al eliminar el arma!' }
      }
    }),
})
