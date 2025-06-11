import { auth } from '@/server/lib/auth'
import { headers } from 'next/headers'

export async function createContext() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return { session }
}

export type Context = Awaited<ReturnType<typeof createContext>>
