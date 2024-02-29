import { MouseEventHandler, useRef } from 'react'
import styles from './DynTable.module.scss'

export function DynTable({ data }: { data: object[] }) {
	const headers = Object.keys(data[0])

	const columns = headers.map((header) => {
		const columnData = data.map((item: any) => {
			return <div className={styles.item}>{item[header]}</div>
		})

		const resizerMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
			if (e.button === 0) {
				const columnNode = (e.target as HTMLDivElement).previousSibling as HTMLDivElement
				const startingWidth = columnNode.clientWidth + 'px'
				columnNode.style.width = startingWidth
				;(columnNode.parentNode as HTMLDivElement).style.userSelect = 'none'

				const mouseMoveHandler: (this: Window, ev: MouseEvent) => any = (e) => {
					if (e.clientX !== columnNode.offsetLeft + columnNode.clientWidth) {
						const difference =
							e.clientX - (columnNode.offsetLeft + columnNode.clientWidth)
						columnNode.style.width =
							parseInt(columnNode.style.width) + difference + 'px'
					}
				}

				window.addEventListener('mousemove', mouseMoveHandler)
				window.addEventListener('mouseup', () => {
					;(columnNode.parentNode as HTMLDivElement).style.userSelect = ''
					window.removeEventListener('mousemove', mouseMoveHandler)
				})
			}
		}

		return (
			<>
				<div className={styles.column}>
					<div className={styles.header}>{header}</div>
					{columnData}
				</div>
				<div
					className={styles.resizer}
					onMouseDown={resizerMouseDown}
					// onMouseUp={resizerMouseUp}
				/>
			</>
		)
	})

	return <div className={styles.container}>{columns}</div>
}
