import React from 'react'
import HeaderTag from './pageHeading'
import ListItems from './list'
import LightBox from './lightbox'
import EditName from './editName'
import EditAddress from './editAddress'
import EditTeam from './editTeam'
class BodyPanel extends React.Component{
	
	showlight(id=""){
		console.log('data',id)
		this.props.showDetailsEdit(id)
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	render(){
		let lightbox=null;
		if(this.props.globalData.showLightbox){
			if(this.props.globalData.showName==="name"){
				lightbox=<LightBox {...this.props}><EditName {...this.props} /></LightBox>
			}
			else if(this.props.globalData.showName==="address"){
				lightbox=<LightBox {...this.props}><EditAddress {...this.props} /></LightBox>
			}else{
				lightbox=<LightBox {...this.props}><EditTeam {...this.props} /></LightBox>
			}
		}
		
		return <div className="row m-0 p-0">
					<HeaderTag>SportsMagazineSeting</HeaderTag>
					<ListItems title="Name">
						<div className="col-lg-3">{this.props.globalData.name}</div>
						<div className="col-lg-3"><button className="btn btn-primary" onClick={this.showlight.bind(this,'name')}>Edit Name</button></div>
					</ListItems>
					<ListItems title="Address">
						<div className="col-lg-3">
							<p>{this.props.globalData.address.address1}</p>
							<p>{this.props.globalData.address.address2} {this.props.globalData.address.zipcode}</p>
						</div>
						<div className="col-lg-3"><button className="btn btn-primary" onClick={this.showlight.bind(this,'address')}>Edit Address</button></div>
					</ListItems>
					<ListItems title="FavouriteTeams">
						<div className="col-lg-3">
							{this.props.globalData.team.map(
								(name,i)=>{
										let data=name?<p>{i+1} {name}</p>: ''
										return data
									})
							}
						</div>
						<div className="col-lg-3"><button className="btn btn-primary" onClick={this.showlight.bind(this,'team')}>Add Teams</button></div>
					</ListItems>
					{lightbox}
				</div>
	}
}
export default BodyPanel

