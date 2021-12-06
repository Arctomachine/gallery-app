import Comment from './Comment'
import CommentForm from './CommentForm'
import {useContext} from 'react'
import Context from '../Context'

// holds all comments to one picture
export default function Comments({comments = []}) {
	comments = useContext(Context).comments.slice().reverse()

	return <div className={'comments-all'}>
		<CommentForm></CommentForm>
		{comments.splice(0, 5).map(item => {
			return <Comment author={item.author} text={item.text} key={item.id}></Comment>
		})}
	</div>
}