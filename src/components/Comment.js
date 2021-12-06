// single comment with signature
export default function Comment({author = '', text = ''}) {
	return <div className={'comment-card'}>
		<div className={'comment-author'}>{author}</div>
		<div className={'comment-text'}>{text}</div>
	</div>
}