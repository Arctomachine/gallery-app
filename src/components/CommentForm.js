import {useContext, useState} from 'react'
import Context from '../Context'

// form to add new comments
export default function CommentForm() {
	const context = useContext(Context)

	// controlled input
	const [text, setText] = useState('')
	function changeHandler(event) {
		setText(event.target.value)
	}

	// add new comment
	function submitHandler(event) {
		event.preventDefault()
		context.addComment({author: 'MyUserName', text, id: Math.random().toString()})
		setText('')
	}

	return <div className={'comment-card'}>
		<form onSubmit={submitHandler}>
			<textarea onChange={changeHandler} value={text} className={'comment-area'}
					  placeholder={'What do you think about this photo?'}></textarea>
			<button type={'submit'} className={'comment-submit'}>Send</button>
		</form>
	</div>
}