import { SettingOutlined } from "@ant-design/icons";
import { Button, Divider, Modal, Select } from "antd";
import React from "react";
import LevelGradeManager from ".";
import type { LevelGrade } from "../domain/entities/levalGrades";
import { LevelGradeRemoteDataSource } from "../data/data/levelGradeRemoteDataSource";
import { LevelGradeRepository } from "../data/repositories/levelGradeRepositorie";
import { GetLevelGrades } from "../domain/usecases/getLevelGradde";
interface ISelectLevelGrades {
	getAllSelectLevelGrade(level: number): void;
}
export default class SelectLevelGrades extends React.Component<ISelectLevelGrades> {
	state = {
		visibleModalLevelGradesManager: false,
		isloading: false,
		optionSelect: [] as { value: string; label: string; data: LevelGrade }[],
	}
	remote: LevelGradeRemoteDataSource = new LevelGradeRemoteDataSource();
	repo: LevelGradeRepository = new LevelGradeRepository(this.remote);
	getLevelGrades: GetLevelGrades = new GetLevelGrades(this.repo);
	listLevelGrade: LevelGrade[] = [];
	componentDidMount = async() => {
		this.setState({isloading: true});
		this.listLevelGrade = await this.getLevelGrades.getAll()
		const option = this.listLevelGrade.map(item => ({
			value: item.level,
			label: item.name,
		}))
		this.setState({
			optionSelect: option,
			isloading: false
		});
		
	}
	openModalLevelGradesManager = () => {
		this.setState({ visibleModalLevelGradesManager: true })
	}
	render() {
		return (
			<>
				<Select 
					placeholder="Vui lòng chọn khối lớp"
					popupRender={(menu) => (
						<>
							{menu}
							<Divider style={{margin: '4px'}}></Divider>
							<Button
								type="link"
								block
								onMouseDown={(e) => e.preventDefault()}
								onClick={this.openModalLevelGradesManager}
							>
								<SettingOutlined style={{ fontSize: 18 }}/>
								Quản lý khối lớp
							</Button>
						</>
					)}
					options={this.state.optionSelect}
					onChange={(value)=>{
						this.props.getAllSelectLevelGrade(value);
					}}
				/>
				<Modal
					open={this.state.visibleModalLevelGradesManager}
					onCancel={() => this.setState({visibleModalLevelGradesManager: false})}
					footer={null}
					width={'80vw'}
					title={'Quản khối lớp'}
				>
					<LevelGradeManager/>
				</Modal>
			</>
		)
	}
}