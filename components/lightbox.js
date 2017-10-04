import React from 'react'

export default class LightBox extends React.Component{
	render(){
		return <div className="lightBox">
					{this.props.children}
			   </div>
	}
}