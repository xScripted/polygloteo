import { pgTable, text, integer, jsonb, timestamp } from 'drizzle-orm/pg-core'

export const User = pgTable('user', {
  id: text('id').primaryKey().notNull(), // si quieres, cambia a uuid('id').defaultRandom()
  password: text('password'),
  name: text('name'),
  surname: text('surname'),
  email: text('email'),
  username: text('username'),
  resetToken: text('reset_token'),
  avatar: text('avatar'),
  streak: integer('streak').default(0),
  chapters: jsonb('chapters').default([]),
  phrases: jsonb('phrases').default([]),
  lastConnection: timestamp('last_connection', { withTimezone: true }).defaultNow(),
  resetTokenExpiration: timestamp('reset_token_expiration', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const Session = pgTable('session', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => User.id),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
})
