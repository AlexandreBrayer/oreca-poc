import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { DATABASE_DATABASE_URL_UNPOOLED } from '$env/static/private';
if (!DATABASE_DATABASE_URL_UNPOOLED) throw new Error('DATABASE_DATABASE_URL_UNPOOLED is not set');
const client = neon(DATABASE_DATABASE_URL_UNPOOLED);
export const db = drizzle(client);
