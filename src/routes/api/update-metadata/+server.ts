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

    return json({ status: 200 })
  } catch (err) {
    console.error(err)
    return json({ error: err }, { status: 500 })
  }
}
