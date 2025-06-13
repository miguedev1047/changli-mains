'use server'

import { createContext } from '@/server/lib/context'

export async function getServerSession() {
  const session = createContext()
  return session
}
