import { db } from '@/db/client'
import { User } from '@/db/tables'

export const load = async () => {
  const users = await db
    .select({
      id: User.id,
      name: User.name,
      surname: User.surname,
      email: User.email,
      username: User.username,
      avatar: User.avatar,
      lastConnection: User.lastConnection,
      phrases: User.phrases,
      chapters: User.chapters,
    })
    .from(User)

  return {
    users,
  }
}
