import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/server/db'
import * as schema from '@/server/db/schema/auth'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema: schema,
  }),
  trustedOrigins: [process.env.BETTER_AUTH_URL || ''],
  emailAndPassword: { enabled: true },
  
})
