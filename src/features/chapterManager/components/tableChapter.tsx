import { Button, Table } from "antd";
import React from "react";
import type { Chapter } from "../domain/entities/chapter";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
interface TableChapterProps{
	dataSource: Chapter[];
}
export default class TableChapter extends React.Component<TableChapterProps>{
	deleteChapter = () => {

	}
	editChapter= () => {

	}
	render(){
		let dataSource = this.props.dataSource;
		const columns = [
			{
				title:'Tên chương',
				render: (item: Chapter) =>{return <div>{item.name}</div>}
			},
			{
				title:'Loại',
				render: (item: Chapter) =>{return <div>{item.category}</div>}
			},
			{
				title:'Thao tác',
				width: 150,
				render: () =>{
					return(
						<div style={{display: 'flex', gap: '8px'}}>
							<Button danger type="primary" icon={<DeleteOutlined />} onClick={this.deleteChapter}>Xóa</Button>
							<Button  type="primary" icon={<EditOutlined />} onClick={this.editChapter}>Sửa</Button>
						</div>
					) 
				}
			},
		]
		return(
			<Table 
				bordered={true}
				columns={columns}
				dataSource={dataSource}
				rowKey="id"
			/>
		)
	}
}