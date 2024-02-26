'use server'

import { db } from '../database/db'

export async function insertNote(text: string) {
	console.log('received', text)

	const sql = 'INSERT INTO notes (text) VALUES (?) RETURNING *;'
	const stmt = db.prepare(sql)
	const res = stmt.get(text) as { note_id: number; text: string; timestamp: string }

	const result = {
		status: 0,
		newRow: res,
	}

	return result
}
