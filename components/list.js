import React from 'react'

/* list items will holds the name, address and team layout*/
export default class ListItems extends React.Component{
	render(){
		return <div className="list-group"><h3>{this.props.title}</h3>{this.props.children}</div>
	}
}