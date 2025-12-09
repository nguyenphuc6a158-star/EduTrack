import { Button, Card, Form, Input, Row, Select } from "antd";
import React from "react";
import type { Chapter } from "../domain/entities/chapter";
import { LevelGradeRemoteDataSource } from "../../levalGradesManager/data/data/levelGradeRemoteDataSource";
import { LevelGradeRepository } from "../../levalGradesManager/data/repositories/levelGradeRepositorie";
import { GetLevelGrades } from "../../levalGradesManager/domain/usecases/getLevelGradde";
import type { LevelGrade } from "../../levalGradesManager/domain/entities/levalGrades";
interface IFormCreateOrUpdateChapterProps{
	onCancel(): void;
	onSave(data: any): void;
	chapter?: Chapter;
	chapterSelected?: Chapter;
}
export default class FormCreateOrUpdateChapter extends React.Component<IFormCreateOrUpdateChapterProps>{
	state = {
		isLoading: false,
		optionsSelect: [] as { value: string; label: string }[],
	};
	remoteLevelGrades: LevelGradeRemoteDataSource = new LevelGradeRemoteDataSource();
	repoLevelGrades: LevelGradeRepository = new LevelGradeRepository(this.remoteLevelGrades);
	getAllLevelGrades: GetLevelGrades = new GetLevelGrades(this.repoLevelGrades);
	listLevelGrades: LevelGrade[] = [];
	componentDidMount = async () => {
		this.setState({isLoading: true});
		this.listLevelGrades = await this.getAllLevelGrades.getAll()
		const options = this.listLevelGrades.map((levelGrade) => ({
			value: levelGrade.level,
			label: levelGrade.level,
		}));
		console.log(options)
		this.setState({
			optionsSelect: options,
			isLoading: false
		});
	}
	componentDidUpdate(prevProps: Readonly<IFormCreateOrUpdateChapterProps>): void {
		if(this.props.chapterSelected !== prevProps.chapterSelected){
			this.setFormValues(this.props.chapterSelected);
		}
	}
	formRef = React.createRef<any>();
	setFormValues = (chapter?: Chapter) => {
		if (!this.formRef.current) return;
		if (chapter == undefined){
			this.formRef.current.resetFields();
			return;
		}
		this.formRef.current?.setFieldsValue({
			name: chapter.name,
			category: chapter.category,
			level: chapter.level,
		});
	};
	onSave  = async () => {
		const values = await this.formRef.current.validateFields();
		let chapter: Chapter = {
			id: '',
			name: values.name,
			category: values.category,
			level: values.level,
		}
		this.props.onSave(chapter);
	}
	render(){
		return (
			<Card>
				<Row style={{ width: "100%"}}>
					<Form layout="vertical" ref={this.formRef} style={{ width: "100%" }} name="chapterManager">
						<Form.Item label="Tên chương" name="name" rules={[{ required: true, message: "Vui lòng nhập tên chương"}]}>
							<Input style={{ width: "100%" }} placeholder="Tên chương"/>
						</Form.Item>
						<Form.Item label="Loại" name="category" rules={[{ required: true, message: "Vui lòng chọn loại" }]}>
							<Select 
								style={{ width: "100%" }}
								placeholder="Chọn loại"
								options={[
									{ value: 'Hình học', label: 'Hình học' },
									{ value: 'Đại số', label: 'Đại số' },
								]}
							/>
						</Form.Item>
						<Form.Item label="Khối" name="level" rules={[{ required: true, message: "Vui lòng chọn loại" }]}>
							<Select 
								style={{ width: "100%" }}
								placeholder="Chọn loại"
								options={this.state.optionsSelect}
							/>
						</Form.Item>
					</Form>
				</Row>
				<Row justify={"center"}>
					<Button type="dashed" onClick={this.props.onCancel}>Hủy</Button>
					&nbsp;&nbsp;
					<Button type="primary" onClick={this.onSave}>Lưu</Button>
				</Row>
			</Card>
			
		)
	}
}