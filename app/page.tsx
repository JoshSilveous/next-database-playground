import Image from 'next/image'
import styles from './page.module.css'
import { seed } from '@/lib/db'
import { NoteContainer } from './components/NoteContainer'
import { DynTable } from '@/lib/components/DynTable'

export default function Home() {
	seed()
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
		<main className={styles.main}>
			<div className={styles.card}>Home component!</div>
			<p>This part is SSR'd</p>
			<DynTable data={people} />
			<NoteContainer />
		</main>
	)
}
