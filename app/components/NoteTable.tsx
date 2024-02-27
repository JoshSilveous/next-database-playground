'use client'
import { getAllNotes } from '@/lib/db/note/getAllNotes'
import { useEffect, useState } from 'react'

export function NoteTable() {
	const [notes, setNotes] = useState<Note[]>()
	useEffect(() => {
		getAllNotes().then((data) => {
			setNotes(data)
		})
	}, [])

	return (
		<div>
			NoteTable!
			<p>{!notes ? 'Loading...' : JSON.stringify(notes)}</p>
		</div>
	)
}
