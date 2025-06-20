import { eq } from 'drizzle-orm'
import { db } from '@/server/db'
import { publicProcedure, protectedProcedure, router } from '@/server/api/trpc'
import { recordIdSchema, recordNameSchema, teamSchema } from '@/schemas'
import { createId } from '@paralleldrive/cuid2'
import { teams, teamsCharacters } from '@/server/db/schema/teams'

export const teamsRouter = router({
  getAll: publicProcedure.query(async () => {
    const teams = await db.query.teams.findMany({
      with: {
        characters: { with: { characterInfo: { with: { roles: true } } } },
      },
    })
    return teams
  }),

  getUnique: publicProcedure.input(recordIdSchema).query(async ({ input }) => {
    const VALIDATION = recordIdSchema.safeParse(input)

    if (!VALIDATION.success) {
      return null
    }

    const { id } = VALIDATION.data

    try {
      const team = await db.query.teams.findFirst({
        with: {
          characters: { with: { characterInfo: { with: { roles: true } } } },
        },
        where: eq(teams.id, id),
      })
      return team
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
        const team = await db.query.teams.findFirst({
          with: {
            characters: { with: { characterInfo: { with: { roles: true } } } },
          },
          where: eq(teams.name, name),
        })
        return team
      } catch {
        return null
      }
    }),

  create: protectedProcedure.input(teamSchema).mutation(async ({ input }) => {
    const CHARACTERS_PER_TEAM = 3

    const teamId = createId()
    const now = new Date()

    const VALIDATION = teamSchema.safeParse(input)

    if (!VALIDATION.success) {
      return { success: false, message: 'Datos invalidos!' }
    }

    const { characters, name } = VALIDATION.data

    if (characters.length > CHARACTERS_PER_TEAM) {
      return {
        success: false,
        message: 'No puedes crear equipos con mas de 3 personajes!',
      }
    }

    try {
      await db.insert(teams).values({
        id: teamId,
        name,
        createdAt: now,
        updatedAt: now,
      })

      const teamCharacters = characters.map((character) => ({
        id: createId(),
        teamId,
        characterId: character.value,
        createdAt: now,
        updatedAt: now,
      }))

      await db.insert(teamsCharacters).values(teamCharacters)

      return { success: true, message: 'Equipo creado correctamente!' }
    } catch {
      return { success: false, message: 'Error al crear el equipo!' }
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
        await db.delete(teams).where(eq(teams.id, id))

        return { success: true, message: 'Equipo eliminado correctamente!' }
      } catch {
        return { success: false, message: 'Error al eliminar el equipo!' }
      }
    }),
})
