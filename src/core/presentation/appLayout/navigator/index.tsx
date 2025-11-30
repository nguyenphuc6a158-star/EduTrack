import React from 'react';
import { Menu } from 'antd';
import itemsMenu from './menuItem';
import Sider from 'antd/es/layout/Sider';
interface ISideNavBarProps{
	collapsed: boolean;
}
export default class SideNavbar extends React.Component<ISideNavBarProps>{
	render = () => {
		return (
			<Sider 
				trigger={null} 
				collapsible 
				collapsed={this.props.collapsed}
				collapsedWidth={80}
				width={window.innerWidth * 0.3}
				>
				<div className="demo-logo-vertical" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['1']}
						items={itemsMenu}
					/>
			</Sider>
		);
	}

}