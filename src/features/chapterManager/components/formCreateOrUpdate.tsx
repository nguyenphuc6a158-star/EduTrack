import { Button, Card, Form, Input, Row, Select } from "antd";
import React from "react";
import type { Chapter } from "../domain/entities/chapter";
interface IFormCreateOrUpdateChapterProps{
	onCancel(): void;
	onSave(data: any): void;
	chapter?: Chapter;
	chapterSelected?: Chapter;
}
export default class FormCreateOrUpdateChapter extends React.Component<IFormCreateOrUpdateChapterProps>{
	componentDidUpdate(prevProps: Readonly<IFormCreateOrUpdateChapterProps>): void {
		if(this.props.chapterSelected !== prevProps.chapterSelected){
			this.setFormValues(this.props.chapterSelected);
		}
	}
	formRef = React.createRef<any>();
	setFormValues = (chapter?: Chapter) => {
		if (chapter == undefined) return;

		this.formRef.current?.setFieldsValue({
			name: chapter.name,
			category: chapter.category
		});
	};
	onSave  = async () => {
		const values = await this.formRef.current.validateFields();
		let chapter: Chapter = {
			id: '',
			name: values.name,
			category: values.category,
		}
		this.props.onSave(chapter);
	}
	render(){
		return (
			<Card>
				<Row style={{ width: "100%"}}>
					<Form ref={this.formRef} style={{ width: "100%" }} name="chapterManager">
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