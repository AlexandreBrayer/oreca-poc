import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
if (!env.DATABASE_POSTGRES_URL) throw new Error('DATABASE_POSTGRES_URL is not set');
const client = neon(env.DATABASE_POSTGRES_URL);
export const db = drizzle(client);
