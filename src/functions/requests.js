export async function getListOfImages(number = 5) {
	const url = `https://picsum.photos/v2/list?limit=${number}`
	try {
		const res = await fetch(url)
		const images = await res.json()
		return {status: 'OK', images}
	} catch (error) {
		console.log(error)
		return {status: 'ERR', error}
	}
}