import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const itemsMenu: MenuItem[] = [
	{ 
		key: '1', 
		label: <Link to="/">HomePage</Link>
	},
	{ 
		key: '2', 
		label: <Link to="/about">AboutPage</Link>
	},
	{ 
		key: '3', 
		label: <Link to="/contact">ContactPage</Link> 
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