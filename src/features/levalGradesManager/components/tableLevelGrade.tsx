import { Table } from "antd";
import React from "react";
import type { LevelGrade } from "../domain/entities/levalGrades";
interface ITableLevelGradeProps{
	listLevelGrades: LevelGrade[];
}
export default class TableLevelGrade extends React.Component<ITableLevelGradeProps>{
	render(){
		const columns = [
			{
				title:'Tên khối',
				render: (item: LevelGrade) =>{return <div>{item.name}</div>}
			},
			{
				title:'Khối',
				render: (item: LevelGrade) =>{return <div>{item.level}</div>}
			},
		];
		return(
			<Table 
				columns={columns}
				dataSource={this.props.listLevelGrades}
			/>
		)
	}
}