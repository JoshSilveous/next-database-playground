import styles from './DynTable.module.scss'

export function DynTable({ data }: { data: object[] }) {
	const headers = Object.keys(data[0])

	const columns = headers.map((header) => {
		const columnData = data.map((item: any) => {
			return <div className={styles.item}>{item[header]}</div>
		})

		return (
			<>
				<div className={styles.column}>
					<div className={styles.header}>{header}</div>
					{columnData}
				</div>
				<div className={styles.resizer} />
			</>
		)
	})

	const jsxData = data.map((row, index) => {
		return (
			<tr key={index}>
				{Object.values(row).map((item, index) => {
					return <td key={index}>{item}</td>
				})}
			</tr>
		)
	})
	return <div className={styles.container}>{columns}</div>
}
