import React from 'react'

/* reusable h1 tag.*/
export default class HeaderTag extends React.Component{
	render(){
		return <h1>{this.props.children}</h1>
	}
}