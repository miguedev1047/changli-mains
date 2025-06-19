import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { characters } from '@/server/db/schema/characters'
import { relations } from 'drizzle-orm'

export const teams = sqliteTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const teamsRelations = relations(teams, ({ many }) => ({
  characters: many(teamsCharacters),
}))

export const teamsCharacters = sqliteTable('teams_characters', {
  id: text('id').primaryKey(),
  teamId: text('team_id')
    .notNull()
    .references(() => teams.id, { onDelete: 'cascade' }),
  characterId: text('character_id')
    .notNull()
    .references(() => characters.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const teamsCharactersRelations = relations(
  teamsCharacters,
  ({ one }) => ({
    teamId: one(teams, {
      fields: [teamsCharacters.teamId],
      references: [teams.id],
    }),
    characterInfo: one(characters, {
      fields: [teamsCharacters.characterId],
      references: [characters.id],
    }),
  })
)
