import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './components/app'

/* Main master class this will holds entire application provider will holds/ send store to application */
class MainPage extends React.Component{
	render(){
		return  <Provider store={store}>
					<App />
				</Provider>
	}
}


render(<MainPage />, MySri);