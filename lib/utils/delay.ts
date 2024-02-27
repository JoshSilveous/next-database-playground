export function delay(time: number): Promise<void> {
	return new Promise((res) => {
		const thisTimeout = setTimeout(() => {
			res()
			clearTimeout(thisTimeout)
		}, time)
	})
}
