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

      if (user) {
        const now = new Date()
        const last = user.lastConnection

        const isSameDay = (d1: Date, d2: Date) =>
          d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()

        if (!last || !isSameDay(last, now)) {
          const yesterday = new Date(now)
          yesterday.setDate(now.getDate() - 1)

          let newStreak = 0
          if (last && isSameDay(last, yesterday)) {
            newStreak = (user.streak ?? 0) + 1
          }

          await db.update(User).set({ streak: newStreak }).where(eq(User.id, user.id))

          user.streak = newStreak
          user.lastConnection = now
        }

        await db.update(User).set({ lastConnection: now }).where(eq(User.id, user.id))

        event.locals.user = user
      }
    }
  }

  return resolve(event)
}
