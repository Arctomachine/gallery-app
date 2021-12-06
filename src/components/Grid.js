import Miniature from './Miniature'

// holds all image previews
export default function Grid({images = []}) {

	// fit 5 pictures in one row
	const screenWidth = window.innerWidth
	const gap = 10
	const scroll = 17
	const desiredWidth = Math.floor((screenWidth - scroll - gap*4 ) / 5)
	const desiredHeight = Math.floor(desiredWidth*3/4)

	return <div className={'miniature-grid'}>
		{images.length !== 0 && images.map(item=>{
			const {id, author} = item
			return <Miniature id={id} author={author} width={desiredWidth} height={desiredHeight} key={id}></Miniature>
		})}
	</div>
}