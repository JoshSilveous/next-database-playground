import Image from 'next/image'
import styles from './page.module.css'
import { seed } from '@/lib/db'
import { NoteContainer } from './components/NoteContainer'
import { DynTable } from '@/lib/components/DynTable'

export default function Home() {
	seed()
	return (
		<main className={styles.main}>
			<div className={styles.card}>Home component!</div>
			<p>This part is SSR'd</p>
			<NoteContainer />
		</main>
	)
}
