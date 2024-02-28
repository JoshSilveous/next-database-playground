'use client'

import { useState } from 'react'
import { addNote } from '@/lib/db/note/addNote'
import { delay } from '@/lib/utils'

export function AddNote({ onNoteAdded }: { onNoteAdded: (note: Note) => any }) {
	const [inputValue, setInputValue] = useState('')
	const [statusText, setStatusText] = useState('')

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		setStatusText('Submitting...')
		addNote(inputValue).then((note) => {
			setStatusText('Submitted!')
			onNoteAdded(note)
			delay(1000).then(() => {
				setStatusText('')
			})
		})
	}
	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex' }}>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Enter a note...'
				required
			/>
			<button type='submit'>Submit</button>
			<p>{statusText}</p>
		</form>
	)
}
