import React from 'react'

import HeaderTag from './pageHeading'
import ListItems from './list'
import LightBox from './lightbox'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action/actionCreators'

class BodyPanel extends React.Component{
	constructor(props){
		super(props)
		this.state={
			showlightbox:true
		}
	}
	EditName(){
		this.props.UpdateName('raj')
	}
	render(){
		return <div className="row m-0 p-0">
					<HeaderTag>SportsMagazineSeting</HeaderTag>
					<ListItems title="Name">
						<div className="col-lg-3">
							<p>Balaji Vasi</p>
						</div>
						<div className="col-lg-3"><button className="btn btn-primary" onClick={this.EditName.bind(this)}>Edit Name</button></div>
					</ListItems>
					<ListItems title="Address">
						<div className="col-lg-3">
							<p>1211 Edison Glen Ter</p>
							<p>Edison, NJ, 08837</p>
						</div>
						<div className="col-lg-3"><button className="btn btn-primary">Edit Address</button></div>
					</ListItems>
					<ListItems title="FavouriteTeams">
						<div className="col-lg-3">
						</div>
						<div className="col-lg-3"><button className="btn btn-primary">Add Teams</button></div>
					</ListItems>
					{this.state.showlightbox? <LightBox>Balaji</LightBox> :''}
				</div>
	}
}

function mapStateToProps(state) {
  return {
    globalData: state.globalData
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(BodyPanel)

