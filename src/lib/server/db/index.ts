import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
if (!env.DATABASE_DATABASE_URL_UNPOOLED) throw new Error('DATABASE_DATABASE_URL_UNPOOLED is not set');
const client = neon(env.DATABASE_DATABASE_URL_UNPOOLED);
export const db = drizzle(client);
