import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from './Header'
import BodyPanel from './bodyPanel'

import * as actionCreators from '../action/actionCreators'

/* App Page will send state to child page using this.props, retrieving data and actions useing mapStateToProps & mapDispachToProps */

class Main extends React.Component{
	render(){
		return <div className="row">
					<Header />
					<BodyPanel {...this.props} />
				</div>
	}
}

// getting state from redux state and passing to react app
function mapStateToProps(state) {
  return {
    globalData: state.configData
  }
}

// getting actions from redux and passing to react app
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App