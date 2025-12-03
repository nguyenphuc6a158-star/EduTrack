import { Button, Card, Col, message, Row } from "antd";
import React from "react";
import FormCreateOrUpdateChapter from "./formCreateOrUpdate";
import TableChapter from "./tableChapter";
import { PlusOutlined } from "@ant-design/icons";
import { ChapterRemoteDataSource } from "../data/data/chapterRemoteDataSource";
import { ChapterRepository } from "../data/responsitories/chapterRepository";
import { CreateChapter } from "../domain/usecases/createChapter";

export default class ChapterManager extends React.Component{
	state = {
		span: 24,
	};
	remote: ChapterRemoteDataSource = new ChapterRemoteDataSource();
	repo: ChapterRepository = new ChapterRepository(this.remote);
	create: CreateChapter = new CreateChapter(this.repo);
	openForm = () => {
		this.setState({span: 12});
	}
	onCancel = () => {
		this.setState({span:24})
	}
	saveSuccess = () => {
		message.success("Thêm mới chương thành công")
	}
	onSave = () =>{
		// let chapter: Chapter{
		// 	id = '',
		// 	name = 
		// }
		this.saveSuccess()
	}
	render(){
		return(
			<Card>
				<Row justify="end" style={{ marginBottom: 8 }}>
					<Button type="primary" onClick={this.openForm} icon={<PlusOutlined />}>Thêm mới</Button>
				</Row>
				<Row gutter={8}>
					<Col span={this.state.span}>
						<TableChapter />
					</Col>
					<Col span={24 - this.state.span}>
						<FormCreateOrUpdateChapter onSave={this.onSave} onCancel={this.onCancel}/>
					</Col>
				</Row>
			</Card>
		)
	}
}