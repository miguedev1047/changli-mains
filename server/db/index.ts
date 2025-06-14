import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { schemas } from './schema'

const client = createClient({
  url: process.env.DATABASE_URL || '',
  authToken: process.env.DATABASE_AUTH_TOKEN,
})

export const db = drizzle({ client, schema: schemas })
