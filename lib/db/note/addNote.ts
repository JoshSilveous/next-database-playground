'use server'
import { sql } from '@vercel/postgres'

export async function addNote(note: string) {
	const res = await sql`
        INSERT INTO notes (text) VALUES (${note}) RETURNING *;
    `

	console.log(res)
	return
}
