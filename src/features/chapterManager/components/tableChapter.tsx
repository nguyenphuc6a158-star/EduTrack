import { Button, Table } from "antd";
import React from "react";
import type { Chapter } from "../domain/entities/chapter";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default class TableChapter extends React.Component{
	deleteChapter = () => {

	}
	editChapter= () => {

	}
	render(){
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
				render: () =>{
					return(
						<div style={{display: 'flex', gap: '8px'}}>
							<Button type="dashed" icon={<DeleteOutlined />} onClick={this.deleteChapter}>Xóa</Button>
							<Button type="primary" icon={<EditOutlined />} onClick={this.editChapter}>Sửa</Button>
						</div>
					) 
				}
			},
		]
		return(
			<Table 
				bordered={true}
				columns={columns}
				dataSource={[]}
				rowKey="id"
			/>
		)
	}
}