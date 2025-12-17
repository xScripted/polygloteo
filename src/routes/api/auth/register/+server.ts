import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import { db } from '@/db/client'
import { eq } from 'drizzle-orm'
import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { User, Session } from '@/db/tables'

export const POST = async ({ request, cookies }) => {
  try {
    const { username, password, email, name, surname } = await request.json()

    if (!username || !password) {
      return new Response('Faltan campos obligatorios', { status: 400 })
    }

    const existingUser = await db.select().from(User).where(eq(User.username, username))

    if (existingUser.length > 0) {
      return new Response('El usuario ya existe', { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const userId = nanoid()

    await db.insert(User).values({
      id: userId,
      username,
      password: hashedPassword,
      email,
      name,
      surname,
    })

    const sessionId = nanoid()
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)

    await db.insert(Session).values({
      id: sessionId,
      userId,
      expiresAt,
    })

    cookies.set('session', sessionId, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: !dev,
      maxAge: 60 * 60 * 24 * 7,
      //...(import.meta.env.DEV ? {} : { domain: 'admin.tramita.info' }),
    })

    return json({ status: 200 })
  } catch (err) {
    console.error('Error en register:', err)
    return json({ error: err }, { status: 500 })
  }
}
