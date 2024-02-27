import Image from 'next/image'
import styles from './page.module.css'
import { AddNote } from './components/AddNote'
import { seed } from '@/lib/db'
import { NoteTable } from './components/NoteTable'

export default function Home() {
	seed()
	return (
		<main className={styles.main}>
			<div className={styles.card}>Enter a new note in the database</div>
			<NoteTable />
			<AddNote />
		</main>
	)
}
