import { sql } from '@vercel/postgres'

export async function seed() {
	await sql`
		CREATE TABLE IF NOT EXISTS notes (
			note_id SERIAL PRIMARY KEY,
			text VARCHAR NOT NULL,
			"createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
		);
	`
	return
}
