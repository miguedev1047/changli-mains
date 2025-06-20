'use server'

import { auth } from '@/server/lib/auth'
import { headers } from 'next/headers'

export async function getServerSession() {
  const session = auth.api.getSession({ headers: await headers() })
  return session
}
