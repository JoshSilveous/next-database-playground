'use client'
import { insertNote } from '@/backend/functions/insertNote'
import styles from './page.module.css'
import React, { useState } from 'react'

export function MyForm() {
	const [inputValue, setInputValue] = useState('')
	const [statusText, setStatusText] = useState('Please submit a note...')

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		setStatusText('Submitting...')

		insertNote(inputValue).then((result) => {
			if (result.status === 0) {
				setStatusText(`Success! ${result.newRow.timestamp}`)
			}
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
