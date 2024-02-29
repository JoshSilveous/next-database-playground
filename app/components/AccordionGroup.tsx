'use client'
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material'
import React, { ReactElement } from 'react'
import { ReactNode } from 'react'

interface ParentComponentProps {
	children: React.ReactElement[]
}
export const AccordionGroup: React.FC<ParentComponentProps> = ({ children }) => {
	const [current, setCurrent] = React.useState<number | undefined>()

	const test = React.Children.map(children, (child, index) => {
		// Clone the element with the new prop
		return React.cloneElement(child, {
			expanded: current === index,
			onClick: () => {
				setCurrent(index)
			},
		})
	})

	return <div>{test}</div>
}
