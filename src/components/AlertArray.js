import Alert from './Alert'
import {useContext} from 'react'
import Context from '../Context'

// holds all individual alerts
export default function AlertArray({alerts = []}) {
	alerts = useContext(Context).alerts
	return <div className={'alert-array'}>
		{alerts.map(item => {
			return <Alert id={item.id} code={item.code} message={item.message} key={item.id}></Alert>
		})}
	</div>
}