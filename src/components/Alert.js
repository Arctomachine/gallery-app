import {useContext} from 'react'
import Context from '../Context'

// single alert instance
export default function Alert({id = '', code = 0, message = ''}) {
	const context = useContext(Context)

	function clickHandler() {
		context.dismissAlert(id)
	}

	return <div className={'alert'}>
		<div>
			{`Error ${code}: ${message}`}
		</div>
		<button onClick={clickHandler} className={'alert-dismiss'}>Dismiss ❌</button>
	</div>
}