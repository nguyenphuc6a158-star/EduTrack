import { Button, Card, Col, message, Modal, Row } from "antd";
import React from "react";
import FormCreateOrUpdateChapter from "./formCreateOrUpdate";
import TableChapter, { ActionChapter } from "./tableChapter";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
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
		isLoading: false,
	};
	chapterSelected: Chapter | undefined;
	openForm = (actionChapter: string) => {
		if(actionChapter === ActionChapter.Create){
			this.chapterSelected = undefined;
		}
		this.setState({span: 12});
	}
	onCancel = () => {
		this.setState({span:24})
	}
	onSave = async (chapter: Chapter) =>{
		console.log(chapter)
		let { createChapter, getAllChapters, updateChapter } = this.props;
		this.setState({isLoading: true});
		if(chapter != undefined){
			if(this.chapterSelected != undefined){
				await updateChapter.updateChapter(this.chapterSelected.id,chapter);
			} else await createChapter.createChapter(chapter);
			message.success("Lưu chương thành công")
			this.onCancel();
			await getAllChapters();
			} else message.error("Lưu chương thất bại");
		this.setState({isLoading: false});	
	} 
	deleteChapter = async (chapterSelected: Chapter) => {
		this.setState({isLoading: true});
		if(chapterSelected != undefined){
			Modal.confirm({
				title: "Xác nhận xóa chương",
				content: `Bạn có chắc chắn muốn xóa chương ${chapterSelected.name} không?`,
				okText: "Xóa",
				cancelText: "Hủy",
				onOk: async () => {
					await this.props.deleteChapter.deleteChapter(chapterSelected.id);
					this.setState({span: 24});
					message.success("Xóa chương thành công");
					await this.props.getAllChapters();
				}
			});
		} else message.error("Xóa chương thất bại");
		this.setState({isLoading: false});
	}
	onAction = (actionChapter: string, chapter: Chapter) => {
		this.chapterSelected = chapter;
		if(actionChapter === ActionChapter.Create){
			this.openForm(ActionChapter.Create);
		}else if(actionChapter === ActionChapter.Delete){
			this.deleteChapter(this.chapterSelected);
		} else if(actionChapter === ActionChapter.Edit){
			this.openForm(actionChapter);
		}
	}
	render(){
		return(
			this.state.isLoading ? 
			<div style={{textAlign: "center"}}>
				<LoadingOutlined />
			</div> :
			<Card>
				<Row justify="end" style={{ marginBottom: 8 }}>
					<Button type="primary" onClick={() => this.openForm(ActionChapter.Create)} icon={<PlusOutlined />}>Thêm mới</Button>
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