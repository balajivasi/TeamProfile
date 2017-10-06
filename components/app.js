import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from './Header'
import BodyPanel from './bodyPanel'

import * as actionCreators from '../action/actionCreators'

class Main extends React.Component{
	render(){
		return <div className="row">
					<Header />
					<BodyPanel {...this.props} />
				</div>
	}
}

function mapStateToProps(state) {
  return {
    globalData: state.configData
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App