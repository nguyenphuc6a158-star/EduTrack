import { Button, Form, Input, Row, Select } from "antd";
import React from "react";
interface IFormCreateOrUpdateChapterProps{
	onCancel(): void;
	onSave(data: any): void;
}
export default class FormCreateOrUpdateChapter extends React.Component<IFormCreateOrUpdateChapterProps>{
	formRef = React.createRef<any>();
	onSave  = async () => {
		const values = await this.formRef.current.validateFields();
		console.log(values);
		this.props.onSave(values);
	}
	render(){
		return (
			<>
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
									{ value: 'hinhHoc', label: 'Hình học' },
									{ value: 'daiSo', label: 'Đại số' },
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
			</>
			
		)
	}
}