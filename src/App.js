import './App.css';
import AlertArray from './components/AlertArray'
import Grid from './components/Grid'
import {useEffect, useState} from 'react'
import {getListOfImages} from './functions/requests'
import Context from './Context'
import Viewer from './components/Viewer'

function App() {

	//context - selected image goes into viewer
	const [selectedImage, setSelectedImage] = useState(null)

	function chooseSelectedImage(id) {
		setSelectedImage(id)
	}

	//context - comment mockup
	const [comments, setComments] = useState([
		{
			id: Math.random().toString(),
			author: 'SomeUserName',
			text: 'Beautiful picture! Nice work, you should publish more of these in future.',
		},
		{id: Math.random().toString(), author: 'OtherUserName', text: 'I like it too.'},
	])

	function addComment(comment) {
		setComments((prevState => [...prevState, comment]))
	}

	//context - list of errors to display in alerts
	const [alerts, setAlerts] = useState([
		// {id: Math.random().toString(), code: 0, message:'Test error'},
	])

	function addAlert(alert) {
		setAlerts(prevState => [...prevState, alert])
	}

	function dismissAlert(id) {
		setAlerts(prevState => prevState.filter(item => item.id !== id))
	}

	const [images, setImages] = useState([]) // list of all images

	// componentDidMount
	useEffect(() => {
		async function fetchData() {
			// load image links from api
			const res = await getListOfImages(15)
			if (res.status === 'OK') {
				setImages(res.images)
			} else {
				addAlert({id: Math.random().toString(), message: res.error})
			}
		}
		fetchData()
	}, [])

	return (
		<Context.Provider
			value={{selectedImage, chooseSelectedImage, comments, addComment, alerts, addAlert, dismissAlert}}>
			<div className="container">
				<Grid images={images}></Grid>
				{selectedImage && <Viewer id={selectedImage}></Viewer>}
				<AlertArray></AlertArray>
			</div>
		</Context.Provider>
	);
}

export default App;
