'use client'
import { NoteTable } from './NoteTable'
import { AddNote } from './AddNote'
import styles from './NoteContainer.module.scss'
import { useEffect, useState } from 'react'
import { getAllNotes } from '@/lib/db/note/getAllNotes'
import { LoadingNotes } from './LoadingNotes'
import { DynTable } from '@/lib/components/DynTable'

export function NoteContainer() {
	const [notes, setNotes] = useState<Note[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getAllNotes().then((notes) => {
			setNotes(notes)
			setIsLoading(false)
		})
	}, [])
	const people = [
		{
			id: 1,
			name: 'Alice',
			age: 28,
			profession: 'Software Engineer',
			hobbies: ['coding', 'chess'],
		},
		{
			id: 2,
			name: 'Bob',
			age: 35,
			profession: 'Graphic Designer',
			hobbies: ['drawing', 'video games'],
		},
		{
			id: 3,
			name: 'Charlie',
			age: 24,
			profession: 'Teacher',
			hobbies: ['reading', 'hiking'],
		},
		{
			id: 4,
			name: 'Diana',
			age: 30,
			profession: 'Data Analyst',
			hobbies: ['data science', 'puzzles'],
		},
		{
			id: 5,
			name: 'Evan',
			age: 40,
			profession: 'Architect',
			hobbies: ['sketching', 'traveling'],
		},
	]

	return (
		<div className={styles.container}>
			<DynTable data={people} />
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
