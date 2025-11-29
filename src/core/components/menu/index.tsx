import React from 'react';
import { Button, Menu } from 'antd';
import itemsMenu from './menuItem';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface State {
  collapsed: boolean;
}
export default class SiderNavbar extends React.Component<{},State>{
	state: State = {
		collapsed: false,
	};
	toggleCollapsed = () => {
		this.setState((prev) => ({ collapsed: !prev.collapsed }));
	};
	render = () => {
		return (
			<div style={{ width: 256 }}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					{this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</Button>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
					items={itemsMenu}
				/>
			</div>
		);
	}

}