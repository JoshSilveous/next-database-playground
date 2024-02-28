import styles from './DynTable.module.scss'

export function DynTable({ data }: { data: object[] }) {
	const headers = Object.keys(data[0])

	const jsxHeaders = headers.map((header, index) => {
		return <th key={index}>{header}</th>
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
	return (
		<table>
			<tr>{jsxHeaders}</tr>
			{jsxData}
		</table>
	)
}
