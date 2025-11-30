import React from 'react';
import Router from './core/routing';

export default class App extends React.Component{
	state = {
		collapsed: false,
	}
	toggleCollapsed = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};
	render(){
		return (
			<Router />
		);
	}
}