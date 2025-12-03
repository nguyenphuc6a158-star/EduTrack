import { BookOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const itemsMenu: MenuItem[] = [
	{ 
		key: '1', 
		label: <Link to="/">Trang chủ</Link>,
		icon: <HomeOutlined  style={{ fontSize: 24 }}/>
	},
	{ 
		key: '2', 
		label: <Link to="/users">Quản lý tài khoản</Link>,
		icon: <UserOutlined style={{ fontSize: 24 }}/>
	},
	{ 
		key: '3', 
		label: <Link to="/exercises">Quản lý bài tập</Link>,
		icon: <BookOutlined style={{ fontSize: 24 }}/>
	},
	{
		key: 'sub1',
		label: 'Navigation One',
		children: [
			{ 
				key: '5', 
				label: 'Option 5' 
			},
			{ 
				key: '6', 
				label: 'Option 6' 
			},
			{ 
				key: '7', 
				label: 'Option 7' 
			},
			{ 
				key: '8', 
				label: 'Option 8' 
			},
		],
	},
];

export default itemsMenu;