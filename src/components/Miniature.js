import {useContext} from 'react'
import Context from '../Context'

// single preview picture
export default function Miniature({id, author, width, height}) {
	const context = useContext(Context)

	// send it to open in viewer
	function clickHandler() {
		context.chooseSelectedImage(id)
	}

	return <div className={'miniature'} onClick={clickHandler}>
		<img src={`https://picsum.photos/id/${id}/${width}/${height}`} title={`Author: ${author}`} alt={''}/>
	</div>
}