import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
interface IHeaderAppProps{
	toggleCollapsed: () => void;
	collapsed: boolean;
}
export default class HeaderApp extends React.Component<IHeaderAppProps>{
	render(){
		return(
			<Header style={{backgroundColor: '#fbf2f2ff ', borderBottom: '1px solid #eee', padding: 0}}>
				<Button
					type="text"
					icon={this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => this.props.toggleCollapsed()}
					style={{
					fontSize: '16px',
					width: 64,
					height: 64,
					}}
				/>
			</Header>
		)
	}
}