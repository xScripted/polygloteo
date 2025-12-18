import { eq } from 'drizzle-orm'
import { db } from '@/db/client'
import { Session, User } from '@/db/tables'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get('session')

  if (sessionId) {
    const session = await db
      .select()
      .from(Session)
      .where(eq(Session.id, sessionId))
      .limit(1)
      .then((r) => r[0])

    if (session) {
      const user = await db
        .select()
        .from(User)
        .where(eq(User.id, session.userId))
        .limit(1)
        .then((r) => r[0])

      const today = new Date()

      if (user) {
        event.locals.user = user
      }
    }
  }

  return resolve(event)
}
