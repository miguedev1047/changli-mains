import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const characters = sqliteTable('characters', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  elementType: text('element_type').notNull(),
  rarity: text('rarity').notNull(),
  weaponType: text('weapon_type').notNull(),
  is_new: integer('is_new', { mode: 'boolean' }).notNull(),
  is_public: integer('is_public', { mode: 'boolean' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const characterRelations = relations(characters, ({ many }) => ({
  roles: many(charactersRoles),
}))

export const charactersRoles = sqliteTable('characters_roles', {
  id: text('id').primaryKey(),
  characterId: text('character_id')
    .notNull()
    .references(() => characters.id, { onDelete: 'cascade' }),
  role: text('role').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const charactersRolesRelations = relations(
  charactersRoles,
  ({ one }) => ({
    characterId: one(characters, {
      fields: [charactersRoles.characterId],
      references: [characters.id],
    }),
  })
)
