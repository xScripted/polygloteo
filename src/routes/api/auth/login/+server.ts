import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import { db } from '@/db/client'
import { eq } from 'drizzle-orm'
import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { User, Session } from '@/db/tables'

export const POST = async ({ request, cookies }) => {
  try {
    const { username, password } = await request.json()

    const result = await db.select().from(User).where(eq(User.username, username))

    const found = result.at(0)

    if (!found) {
      return new Response('Usuario no encontrado', { status: 404 })
    }

    if (!found.password) {
      return new Response('Error de autenticación', { status: 400 })
    }

    const valid = await bcrypt.compare(password, found.password)
    if (!valid) return new Response('Contraseña incorrecta', { status: 401 })

    const sessionId = nanoid()
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)

    await db.insert(Session).values({
      id: sessionId,
      userId: found.id,
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
    console.error(err)
    return json({ error: err }, { status: 500 })
  }
}
