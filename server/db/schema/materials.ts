import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const materials = sqliteTable('materials', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  icon_image: text('icon_image').notNull(),
  rarity: text('rarity').notNull(),
  is_new: integer('is_new', { mode: 'boolean' }).notNull(),
  is_public: integer('is_public', { mode: 'boolean' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})
