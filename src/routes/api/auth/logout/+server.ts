import { db } from '@/db/client'
import { eq } from 'drizzle-orm'
import { Session } from '@/db/tables'
import { redirect } from '@sveltejs/kit'

export const GET = async ({ cookies }) => {
  const sessionId = cookies.get('session')

  if (sessionId) {
    await db.delete(Session).where(eq(Session.id, sessionId))
  }

  cookies.set('session', '', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: !import.meta.env.DEV,
    maxAge: 0,
  })

  throw redirect(303, '/login')
}
