'use client'
import styles from './NoteContainer.module.scss'

export function NoteTable({ notes }: { notes: Note[] }) {
	const notesDisplay = notes.map((note) => {
		return (
			<tr>
				<td>{note.createdAt.toLocaleString()}</td>
				<td>{note.note_id}</td>
				<td>{note.text}</td>
			</tr>
		)
	})

	return (
		<table>
			<tr>
				<th className={styles.timestamp}>Timestamp</th>
				<th className={styles.id}>ID</th>
				<th className={styles.note}>Note</th>
			</tr>
			{notesDisplay}
		</table>
	)
}
