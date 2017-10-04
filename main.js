import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux'
import Store from './store'

import App from './components/app'


class MainPage extends React.Component{
	render(){
		return  <Provider store={Store}>
					<App />
				</Provider>
	}
}


render(<MainPage />, MySri);