import React from 'react'

class Button extends React.Component{
	render(){
		return <button className={this.props.classdetails} onClick={this.props.clikSubmit} >{this.props.children}</button>
	}
}

export default Button