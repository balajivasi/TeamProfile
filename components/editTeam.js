import React from 'react'
import Button from './button'

class EditTeam extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	handleChange(){
		this.setState({
			
		})
	}
	hidelight(){
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	submitAddress(){
		this.props.addTeams(this.state);
		this.hidelight()
	}
	render(){
		return  <div className="col-lg-12">
					<h3>Update Address</h3>
					<form class="form-horizontal">
				 	<div className="form-group">
					    <label htmlFor="Team1" className="col-sm-2 control-label">Team1</label>
					    <div class="col-sm-10"><input type="text" className="form-control" ref="Team1" id="Team1" onChange={this.handleChange.bind(this)} placeholder="Team 1"  /></div>
					</div>
					<div className="form-group">
					    <label htmlFor="Team2" className="col-sm-2 control-label">Team2</label>
					    <div class="col-sm-10">
					    	<input type="text" className="form-control" ref="Team2" id="Team2" 
					    		onChange={this.handleChange.bind(this)} placeholder="Team 2" />
					   	</div>
					</div>
					<div className="form-group">
					    <label htmlFor="Team3" className="col-sm-2 control-label">Team3</label>
					    <div class="col-sm-10">
					    	<input type="text" className="form-control" ref="Team3" id="Team3" 
					    		onChange={this.handleChange.bind(this)} placeholder="Team 3" />
					    </div>
					</div>
					<div className="col-lg-12 m-0 p-0">
						<Button classdetails="btn btn-primary" clikSubmit={this.hidelight.bind(this)}>Cancel</Button>
						<Button classdetails="btn btn-success" clikSubmit={this.submitAddress.bind(this)}>Save</Button>
					</div>
					</form>
				</div>
	}
}

export default EditTeam