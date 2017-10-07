import React from 'react'
import Button from './button'

/*
	EditTeam component will handle the team add or edit
	

*/

class EditTeam extends React.Component{
	constructor(props){
		super(props)
		this.state={
			teamData:this.props.globalData.team
		}
	}
	handleChange(i, event) {
	     let teamData = this.state.teamData.slice();
	     teamData[i] = event.target.value;
	     this.setState({teamData});
	  }
	
	hidelight(){
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	submitTeam(){
		this.props.addTeams(this.state.teamData);
		this.hidelight()
	}
	addData(){
		let newelement=''
		this.setState({
			teamData:[...this.state.teamData, newelement]
		})
	}
	showTeamList(){
		let uiItems = [];
	     for(let i = 0; i < this.state.teamData.length; i++){
	     		let item=<div key={i} className="form-group">
	               		<label htmlFor="Team" className="col-sm-3 control-label">Team {i+1}</label>
				    	<div className="col-sm-9">
	                   		<input className="form-control" type="text" value={this.state.teamData[i] || ''} onChange={this.handleChange.bind(this,i)} />
	                   	</div>
	               </div>
	           uiItems.push(item)
	     }
	     return uiItems || null;
	}
	render(){
		return  <div className="col-lg-12 m-0 p-0 form-horizontal">
					<div className="col-lg-12">
						<h4>Add Teams</h4>
						{this.showTeamList()}
						<Button classdetails="btn btn-link" settype="button" clikSubmit={this.addData.bind(this)}>+ Add another</Button>
					</div>	
					<div className="col-lg-12 m-0 p-0">
						<Button settype="button" classdetails="btn btn-primary" clikSubmit={this.hidelight.bind(this)}>Cancel</Button>
						<Button settype="submit" classdetails="btn btn-success" clikSubmit={this.submitTeam.bind(this)}>Save</Button>
					</div>
				</div>
	}
}
export default EditTeam






