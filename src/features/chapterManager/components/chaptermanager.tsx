import { Button, Card, Col, message, Modal, Row } from "antd";
import React from "react";
import FormCreateOrUpdateChapter from "./formCreateOrUpdate";
import TableChapter, { ActionChapter } from "./tableChapter";
import { PlusOutlined } from "@ant-design/icons";
import type { Chapter } from "../domain/entities/chapter";
import { UpdateChapters } from "../domain/usecases/updateChapter";
import { CreateChapter } from "../domain/usecases/createChapter";
import type DeleteChapter from "../domain/usecases/deleteChapter";
interface IChapterManagerProps{
	createChapter: CreateChapter;
	getAllChapters: () => Promise<void>;
	listChapters: Chapter[];
	updateChapter: UpdateChapters;
	deleteChapter:DeleteChapter
}
export default class ChapterManager extends React.Component<IChapterManagerProps>{
	state = {
		span: 24,
		isloading: false,
	};
	chapterSelected: Chapter | undefined;
	openForm = () => {
		this.setState({span: 12});
	}
	onCancel = () => {
		this.setState({span:24})
	}
	onSave = async (chapter: Chapter) =>{
		let { createChapter, getAllChapters, updateChapter } = this.props;
		if(chapter != undefined){
			if(this.chapterSelected != undefined){
				await updateChapter.updateChapter(this.chapterSelected.id,chapter);
			} else await createChapter.createChapter(chapter);
			message.success("Lưu chương thành công")
			this.onCancel();
			await getAllChapters();
			} else message.error("Lưu chương thất bại");
	} 
	deleteChapter = async (chapterSelected: Chapter) => {
		if(chapterSelected != undefined){
			Modal.confirm({
				title: "Xác nhận xóa chương",
				content: `Bạn có chắc chắn muốn xóa chương ${chapterSelected.name} không?`,
				okText: "Xóa",
				cancelText: "Hủy",
				onOk: async () => {
					await this.props.deleteChapter.deleteChapter(chapterSelected.id);
					message.success("Xóa chương thành công");
					await this.props.getAllChapters();
				}
			});
		} else message.error("Xóa chương thất bại");
		this.setState({isLoading: !this.state.isloading});
	}
	onAction = (actionChapter: string, chapter: Chapter) => {
		this.chapterSelected = chapter;
		if(actionChapter === ActionChapter.Delete){
			this.deleteChapter(this.chapterSelected);
		} else if(actionChapter === ActionChapter.Edit){
			this.openForm();
		}
	}
	render(){
		return(
			<Card>
				<Row justify="end" style={{ marginBottom: 8 }}>
					<Button type="primary" onClick={this.openForm} icon={<PlusOutlined />}>Thêm mới</Button>
				</Row>
				<Row gutter={8}>
					<Col span={this.state.span}>
						<TableChapter onAction={this.onAction} dataSource={this.props.listChapters}/>
					</Col>
					<Col span={24 - this.state.span}>
						<FormCreateOrUpdateChapter chapterSelected={this.chapterSelected} onSave={this.onSave} onCancel={this.onCancel}/>
					</Col>
				</Row>
			</Card>
		)
	}
}