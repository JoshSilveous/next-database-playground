import Image from 'next/image'
import styles from './page.module.css'
import { seed } from '@/lib/db'
import { NoteContainer } from './components/NoteContainer'
import { DynTable } from '@/lib/components/DynTable'
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material'
import { AccordionGroup } from './components/AccordionGroup'

export default function Home() {
	seed()
	return (
		<main className={styles.main}>
			<AccordionGroup>
				<Accordion>
					<AccordionSummary id='panel-header' aria-controls='panel-content'>
						Header1
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary id='panel-header' aria-controls='panel-content'>
						Header2
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</AccordionDetails>
				</Accordion>
			</AccordionGroup>
			{/* <div className={styles.card}>Home component!</div>
			<p>This part is SSR'd</p>
			<NoteContainer /> */}
		</main>
	)
}
