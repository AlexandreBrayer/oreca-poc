import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_DATABASE_URL_UNPOOLED) throw new Error('DATABASE_DATABASE_URL_UNPOOLED is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: process.env.DATABASE_DATABASE_URL_UNPOOLED
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
