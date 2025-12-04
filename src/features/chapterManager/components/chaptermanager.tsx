import { Button, Card, Col, message, Row } from "antd";
import React from "react";
import FormCreateOrUpdateChapter from "./formCreateOrUpdate";
import TableChapter from "./tableChapter";
import { PlusOutlined } from "@ant-design/icons";
import type { Chapter } from "../domain/entities/chapter";
interface IChapterManagerProps{
	createChapter: (chapter: Chapter) => Promise<void>;
	getAllChapters: () => Promise<void>;
	listChapters: Chapter[];
	updateChapter: (chapter: Chapter) => Promise<void>;
}
export default class ChapterManager extends React.Component<IChapterManagerProps>{
	state = {
		span: 24,
		isloading: false,
	};
	openForm = () => {
		this.setState({span: 12});
	}
	onCancel = () => {
		this.setState({span:24})
	}
	saveSuccess = () => {
		message.success("Thêm mới chương thành công")
	}
	onSave = async (data: any) =>{
		let { createChapter, getAllChapters } = this.props;
		let nameChapter: string = '';
		let categoryChapter: string = '';
		if(data != undefined){
			nameChapter = data.name;
			if(data.category === 1){
				categoryChapter = 'Hình học';
			} else if(data.category === 2){
				categoryChapter = 'Đại số';
			}
			let chapter: Chapter = {
				id: '',
				name: nameChapter,
				category: categoryChapter,
			}
			await createChapter(chapter);
			this.saveSuccess();
			this.onCancel();
			await getAllChapters();
		}
		message.error("Lưu chương thất bại");
	}
	render(){
		return(
			<Card>
				<Row justify="end" style={{ marginBottom: 8 }}>
					<Button type="primary" onClick={this.openForm} icon={<PlusOutlined />}>Thêm mới</Button>
				</Row>
				<Row gutter={8}>
					<Col span={this.state.span}>
						<TableChapter dataSource={this.props.listChapters}/>
					</Col>
					<Col span={24 - this.state.span}>
						<FormCreateOrUpdateChapter onSave={this.onSave} onCancel={this.onCancel}/>
					</Col>
				</Row>
			</Card>
		)
	}
}