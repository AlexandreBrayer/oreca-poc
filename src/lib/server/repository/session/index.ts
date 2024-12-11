import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function insertSession(session: table.Session) {
	const [insertedSession] = await db.insert(table.session).values(session).returning();
	return insertedSession;
}

export async function getSessionWithUser(sessionId: string) {
	const [sessionWithUser] = await db
		.select({
			user: { id: table.user.id, username: table.user.username },
			session: table.session
		})
		.from(table.session)
		.innerJoin(table.user, eq(table.session.userId, table.user.id))
		.where(eq(table.session.id, sessionId));
	return sessionWithUser;
}

export async function deleteSessionById(sessionId : string) {
	await db.delete(table.session).where(eq(table.session.id, sessionId));
}

export async function refreshSession(session: table.Session, expiresAt: Date) {
	const [updatedSession] = await db
		.update(table.session)
		.set({ expiresAt })
		.where(eq(table.session.id, session.id))
		.returning();
	return updatedSession;
}
