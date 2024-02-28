'use client'
import { NoteTable } from './NoteTable'
import { AddNote } from './AddNote'
import styles from './NoteContainer.module.scss'
import { useEffect, useState } from 'react'
import { getAllNotes } from '@/lib/db/note/getAllNotes'
import { LoadingNotes } from './LoadingNotes'

export function NoteContainer() {
	const [notes, setNotes] = useState<Note[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getAllNotes().then((notes) => {
			setNotes(notes)
			setIsLoading(false)
		})
	}, [])

	return (
		<div className={styles.container}>
			<h1>NoteContainer!</h1>

			<div className={styles.table_container}>
				{isLoading ? <LoadingNotes /> : <NoteTable notes={notes} />}
			</div>

			<AddNote
				onNoteAdded={(note) => {
					setNotes((prev) => [...prev, note])
				}}
			/>
		</div>
	)
}
