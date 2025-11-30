import { Layout } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import SideNavbar from "./navigator";
import HeaderApp from "./header";
export default class AppLayout extends React.Component{
	state = {
		collapsed: false,
	};
	toggleCollapsed = () => {
		this.setState({collapsed: !this.state.collapsed})
	}
	render(){
		return(
			<Layout style={{ minHeight: '100vh' }}>
				<SideNavbar
					collapsed={this.state.collapsed} 
				/>
				<Layout>
					<HeaderApp
						collapsed={this.state.collapsed} 
						toggleCollapsed={this.toggleCollapsed}
					/>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		)
	}
}