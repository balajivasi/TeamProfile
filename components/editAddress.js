import React from 'react'
import Button from './button'

/* Address Edit page 
	
	handleChange function will handel input data
	hidelight function will hide Light box after clicking close/cance/save
	submitaddress function will send data to actionCreater. action creater will calls reducer and reducer will upadte store then view will updates.
 	
 	Button component is reusable button component
 */
class EditAddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			address1:this.props.globalData.address.address1,
			address2:this.props.globalData.address.address2,
			zipcode:this.props.globalData.address.zipcode,
		}
	}
	handleChange(){
		this.setState({
			address1:this.refs.address1.value,
			address2:this.refs.address2.value,
			zipcode:this.refs.zipcode.value
		})
	}
	hidelight(){
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	submitAddress(){
		this.props.UpdateAddress(this.state);
		this.hidelight()
	}
	render(){
		return  <div className="col-lg-12 m-0 p-0">
					<div className="col-lg-12">
						<h4>Update Address</h4>
					 	<div className="form-group">
						    <label htmlFor="Address1">Address1</label>
						    <input type="text" className="form-control" ref="address1" id="address1" onChange={this.handleChange.bind(this)} placeholder="address" value={this.state.address1} />
						</div>
						<div className="form-group">
						    <label htmlFor="Address2">Address2</label>
						    <input type="text" className="form-control" ref="address2" id="address2" onChange={this.handleChange.bind(this)} placeholder="adress" value={this.state.address2} />
						</div>
						<div className="form-group">
						    <label htmlFor="Zipcode">Zipcode</label>
						    <input type="text" className="form-control" ref="zipcode" id="zipcode" onChange={this.handleChange.bind(this)} placeholder="zipcode" value={this.state.zipcode} />
						</div>
					</div>
					<div className="col-lg-12 m-0 p-0">
						<Button settype="button" classdetails="btn btn-primary" clikSubmit={this.hidelight.bind(this)}>Cancel</Button>
						<Button settype="button" classdetails="btn btn-success" clikSubmit={this.submitAddress.bind(this)}>Save</Button>
					</div>
				</div>
	}
}

export default EditAddress