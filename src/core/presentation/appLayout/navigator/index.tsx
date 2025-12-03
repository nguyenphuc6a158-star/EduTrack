import React from 'react';
import { Image, Menu } from 'antd';
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
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: 200,
					marginBottom: 20
				}}>		
					<Image 
						width={200}
						height={200} 
						src="../public/logoEdutrack.png" 
						alt="Logo"
						preview={false}
						style={{ cursor: 'default' }} 
					/>
				</div>
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