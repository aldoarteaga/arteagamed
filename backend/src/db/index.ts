import pg from 'pg';
import { config } from '../config.js';

const { Pool } = pg;

export const db = new Pool({
  connectionString: config.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  ssl: config.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
});

db.on('error', (err) => {
  console.error('Unexpected DB pool error', err);
});

export async function checkDbConnection(): Promise<void> {
  const client = await db.connect();
  await client.query('SELECT 1');
  client.release();
}
