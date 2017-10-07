import React from 'react'
import Button from './button'

/*
	EditName component will handle name edit and save data to store

	
*/

class EditName extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name:this.props.globalData.name
		}
	}
	handleChange(){
		this.setState({
			name:this.refs.editName.value
		})
	}
	hidelight(){
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	submitName(){
		this.props.UpdateName(this.state.name);
		this.hidelight()
	}
	render(){
		return  <div className="Namepanel">
				 	<div className="col-lg-12 form-group">
					    <h4>Edit Name</h4>
					    <input type="email" className="form-control" ref="editName" id="name" onChange={this.handleChange.bind(this)} placeholder="Email" value={this.state.name} />
					</div>
					<div className="col-lg-12 m-0 p-0">
						<Button settype="button" classdetails="btn btn-primary" clikSubmit={this.hidelight.bind(this)}>Cancel</Button>
						<Button settype="button" classdetails="btn btn-success" clikSubmit={this.submitName.bind(this)}>Save</Button>
					</div>
				</div>
	}
}

export default EditName