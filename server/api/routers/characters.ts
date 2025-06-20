import { eq } from 'drizzle-orm'
import { db } from '@/server/db'
import { publicProcedure, protectedProcedure, router } from '@/server/api/trpc'
import { createId } from '@paralleldrive/cuid2'
import { characters, charactersRoles } from '@/server/db/schema/characters'
import { characterSchema, recordIdSchema, recordNameSchema } from '@/schemas'
import { DEFAULT_ZERO } from '@/constants/misc'

export const charactersRouter = router({
  getAll: publicProcedure.query(async () => {
    try {
      const characters = await db.query.characters.findMany({
        with: { roles: true },
        orderBy: (characters, { asc }) => asc(characters.name),
      })
      return characters
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
      const character = await db.query.characters.findFirst({
        where: (character, { eq }) => eq(character.id, id),
        with: { roles: true },
      })
      return character
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
        const character = await db.query.characters.findFirst({
          where: (character, { eq }) => eq(character.name, name),
          with: { roles: true },
        })
        return character
      } catch {
        return null
      }
    }),

  create: protectedProcedure
    .input(characterSchema)
    .mutation(async ({ input }) => {
      const characterId = createId()
      const now = new Date()

      const VALIDATION = characterSchema.safeParse(input)

      if (!VALIDATION.success) {
        return { success: false, message: 'Datos invalidos!' }
      }

      const {
        description,
        combat_styles,
        element_type,
        icon_image,
        splash_image,
        name,
        rarity,
        weapon_type,
        is_new,
        is_public,
      } = VALIDATION.data

      if (combat_styles.length <= DEFAULT_ZERO) {
        return {
          success: false,
          message: 'Debes seleccionar al menos un estilo de combate!',
        }
      }

      try {
        await db.insert(characters).values({
          id: characterId,
          description,
          element_type,
          splash_image,
          icon_image,
          name,
          rarity,
          weapon_type,
          is_new,
          is_public,
          createdAt: now,
          updatedAt: now,
        })

        const characterRoles = combat_styles.map((role) => ({
          id: createId(),
          characterId,
          role: role.value,
          createdAt: now,
          updatedAt: now,
        }))

        await db.insert(charactersRoles).values(characterRoles)

        return { success: true, message: 'Personaje creado correctamente!' }
      } catch {
        return { success: false, message: 'Error al crear el personaje!' }
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
        await db.delete(characters).where(eq(characters.id, id))
        return { success: true, message: 'Personaje eliminado correctamente!' }
      } catch {
        return { success: false, message: 'Error al eliminar el personaje!' }
      }
    }),
})
