import {useContext, useState} from 'react'
import Context from '../Context'
import Comments from './Comments'

// viewer: display full image
export default function Viewer({id}) {
	const [liked, setLiked] = useState(false)
	const [showComments, setShowComments] = useState(false)
	const width = window.innerWidth
	const height = window.innerHeight
	const url = `https://picsum.photos/id/${id}/${width}/${height}`
	const context = useContext(Context)

	// return to grid
	function closeHandler() {
		context.chooseSelectedImage(null)
	}

	// display comments and form
	function commentHandler() {
		setShowComments(!showComments)
	}

	// leave like to image
	function likeHandler() {
		setLiked(!liked)
	}

	return <div className={'viewer-container'}>
		<img src={url} alt={''}/>
		<div className={'viewer-ui'}>
			<button className={'viewer-close viewer-button'} onClick={closeHandler} title={'Close'}>✖</button>
			<button className={`viewer-like viewer-button ${liked && 'liked'}`} title={'Like'} onClick={likeHandler}>❤
			</button>
			<button className={'viewer-commentButton viewer-button'} onClick={commentHandler} title={'Comment'}>🗎
			</button>
			{showComments && <Comments></Comments>}
		</div>
	</div>
}