import { DB_URL } from '$env/static/private'

// src/lib/db/client.ts
import { drizzle } from 'drizzle-orm/neon-serverless'
import { neonConfig, Pool } from '@neondatabase/serverless'
import ws from 'ws'
import * as schema from './tables'

// Necesario para que funcione en Node.js
neonConfig.webSocketConstructor = ws

// Creamos un pool WS
const pool = new Pool({ connectionString: DB_URL! })

// Drizzle con WebSocket
export const db = drizzle(pool, { schema })
