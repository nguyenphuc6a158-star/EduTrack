import { BlockOutlined, BookOutlined, HomeOutlined, InsertRowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import { Link } from "react-router-dom";
import type LevelGradeManager from "../../../../features/levalGradesManager/components";

// type MenuItem = Required<MenuProps>['items'][number];
interface IMenuItem {
	key: string;
	label: React.ReactNode;
	icon?: React.ReactNode;
	components: LazyExoticComponent<ComponentType<any>>;
	permission: string;
}
const itemsMenu: IMenuItem[] = [
	{ 
		key: '/', 
		label: <Link to="/">Trang chủ</Link>,
		icon: <HomeOutlined  style={{ fontSize: 24 }}/>,
		components: lazy(() => import("../../../../features/home/components")),
		permission: '',
	},
	{ 
		key: '/exercises', 
		label: <Link to="/exercises">Quản lý bài tập</Link>,
		icon: <BookOutlined style={{ fontSize: 24 }}/>,
		components: lazy(() => import("../../../../features/exercises/components")),
		permission: '',
	},
	
	{
		key: '/level_grades', 
		label: <Link to="/level_grades">Quản lý khối học</Link>,
		icon: <BlockOutlined style={{ fontSize: 24 }}/>,
		components: lazy(() => import("../../../../features/levalGradesManager/components")),
		permission: '',
	},
	{ 
		key: '/classes', 
		label: <Link to="/classes">Quản lý lớp học</Link>,
		icon: <InsertRowLeftOutlined style={{ fontSize: 24 }}/>,
		components: lazy(() => import("../../../../features/classManager/components")),
		permission: '',
	},
	{ 
		key: '/users', 
		label: <Link to="/users">Quản lý tài khoản</Link>,
		icon: <UserOutlined style={{ fontSize: 24 }}/>,
		components: lazy(() => import("../../../../features/users/components")),
		permission: '',
	},
];

export default itemsMenu;