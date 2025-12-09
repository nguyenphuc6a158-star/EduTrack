import { Button, Card, Col, Row } from "antd";
import React from "react";
import TableLevelGrade from "./tableLevelGrade";
import FormCreateUpdate from "./formCreateUpdateLevelGrade";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { LevelGradeRemoteDataSource } from "../data/data/levelGradeRemoteDataSource";
import { LevelGradeRepository } from "../data/repositories/levelGradeRepositorie";
import { GetLevelGrades} from "../domain/usecases/getLevelGradde";
import type { LevelGrade } from "../domain/entities/levalGrades";
import { CreateLevelGrade } from "../domain/usecases/createLevelGrade";
interface ILevelGradeManagerProps {
}
export default class LevelGradeManager extends React.Component<ILevelGradeManagerProps> {
	state = {
		span: 24,
		isLoading: false,
	}
	remote: LevelGradeRemoteDataSource = new LevelGradeRemoteDataSource();
	repo: LevelGradeRepository = new LevelGradeRepository(this.remote);
	getLevelGrades: GetLevelGrades = new GetLevelGrades(this.repo);
	createLevelGrades: CreateLevelGrade = new CreateLevelGrade(this.repo)
	listLevelGrades:LevelGrade[] = [];
	componentDidMount = async () => {
		this.setState({isLoading: true});
		console.log(this.repo)
		this.listLevelGrades = await this.getLevelGrades.getAll();
		this.setState({isLoading: false});
	}
	openForm = () => {
		this.setState({span: 12})
	}
	render() {
		return (
			this.state.isLoading ? 
			<div style={{justifyContent: 'center'}}>
				<LoadingOutlined />
			</div>:
			<Card>
				<Row justify='end'>
					<Button onClick={()=>this.openForm()} type="primary"><PlusOutlined />Thêm mới khối</Button>
				</Row>
				&nbsp;&nbsp;
				<Row gutter={8}>
					<Col span={this.state.span}>
						<TableLevelGrade listLevelGrades={this.listLevelGrades} />
					</Col>
					<Col span={24 - this.state.span}>
						<FormCreateUpdate createLevelGrades={this.createLevelGrades} onCancel={()=>this.setState({span:24})} />
					</Col>
				</Row>
			</Card>
		)
	}
}