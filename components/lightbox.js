import React from 'react'


/* light box component will take care about lightBox, close and children data/components */
export default class LightBox extends React.Component{
	showlight(){
		this.props.showHideLightBox(!this.props.globalData.showLightbox)
	}
	render(){
		return <div className="lightBox">
					<div className="dataPanel">
						<div className="col-lg-12 m-0 p-0 contentPanel">
					 		<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"  onClick={this.showlight.bind(this)}>&times;</span></button>
							{this.props.children}
					 	</div>
					</div>
			   </div>
	}
}