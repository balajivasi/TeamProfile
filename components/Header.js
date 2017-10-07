import React from 'react'

/* header components will holds page Header*/

export default class Header extends React.Component{
	render(){
		return <header className="navbar navbar-inverse">
					<div className="navbar-header"><a className="navbar-brand" href="#">Sports Magazine</a></div>
    			</header>
	}
}