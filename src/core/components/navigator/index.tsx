import React from 'react';
import { Button, Col, Menu, Row } from 'antd';
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
			<Row gutter={10} style={{display:'flex', width: 256 }} className="sider-navbar">
				<Col style={{height: '100vh'}} span={20}>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
						inlineCollapsed={this.state.collapsed}
						items={itemsMenu}
					/>
				</Col>
				<Col span={4}>
					<Button onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
						{this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</Button>
				</Col>
			</Row>
		);
	}

}