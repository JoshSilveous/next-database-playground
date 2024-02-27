'use client'

import { useState } from 'react'
import styles from './components.module.css'
import { addNote } from '@/lib/db/note/addNote'
import { delay } from '@/lib/utils'

export function AddNote() {
	const [inputValue, setInputValue] = useState('')
	const [statusText, setStatusText] = useState('')

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		setStatusText('Submitting...')
		addNote(inputValue).then(() => {
			setStatusText('Submitted!')
			delay(1000).then(() => {
				setStatusText('')
			})
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Enter a note...'
				required
			/>
			<button type='submit'>Submit</button>
			<p className={styles.statustext}>{statusText}</p>
		</form>
	)
}
