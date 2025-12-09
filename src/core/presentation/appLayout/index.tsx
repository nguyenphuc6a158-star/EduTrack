import { Col, Layout } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import SideNavbar from "./navigator";
import HeaderApp from "./header";
import { SelectedLevelContext } from "../selectedLevelContext";
export default class AppLayout extends React.Component{
	state = {
		collapsed: false,
	};
	selectedLevel: number = -1
	toggleCollapsed = () => {
		this.setState({collapsed: !this.state.collapsed})
	}
	getSelectedLevel = (selectedLevel: number) => {
		console.log('aaaaaaaaaaaaaaa')
		this.selectedLevel = selectedLevel
		console.log(this.selectedLevel)
	}
	render(){
		return(
			<Layout style={{minHeight: '100vh' }}>
				<SideNavbar
					collapsed={this.state.collapsed} 
				/>
				<Layout>
					<HeaderApp
						getSelectedLevel={this.getSelectedLevel}
						collapsed={this.state.collapsed} 
						toggleCollapsed={this.toggleCollapsed}
					/>
					<Content>
						<Col>
							<SelectedLevelContext.Provider value={this.selectedLevel}>
							<Outlet />
							</SelectedLevelContext.Provider>
						</Col>
					</Content>
				</Layout>
			</Layout>			
		)
	}
}