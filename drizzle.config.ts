import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export default {
  schema: './src/db/tables.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  strict: true,
} satisfies Config
