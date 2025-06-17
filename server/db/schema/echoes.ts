import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const echoes = sqliteTable('echoes', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description_skill: text('description_skill').notNull(),
  icon_image: text('icon_image').notNull(),
  class_type: text('class_type').notNull(),
  cost: text('cost').notNull(),
  is_new: integer('is_new', { mode: 'boolean' }).notNull(),
  is_public: integer('is_public', { mode: 'boolean' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const echoesRelations = relations(echoes, ({ many }) => ({
  sets: many(echoesSets),
}))

export const echoesSets = sqliteTable('echoes_sets', {
  id: text('id').primaryKey(),
  echoId: text('echo_id')
    .notNull()
    .references(() => echoes.id, { onDelete: 'cascade' }),
  echoSet: text('echo_set').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const echoesSetsRelations = relations(echoesSets, ({ one }) => ({
  echoId: one(echoes, {
    fields: [echoesSets.echoId],
    references: [echoes.id],
  }),
}))
