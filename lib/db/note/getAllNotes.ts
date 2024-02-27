'use server'
import { sql } from '@vercel/postgres'

export async function getAllNotes() {
	const res = await sql`
        SELECT * FROM notes;
    `

	console.log('running getAllNotes')
	return res.rows as Note[]
}
