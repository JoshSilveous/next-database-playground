import Image from 'next/image'
import styles from './page.module.css'
import { MyForm } from './MyForm'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.card}>Enter a new note in the database</div>
			<MyForm />
		</main>
	)
}
