import { Button, Card, Form, Input, InputNumber, Row } from "antd";
import React from "react";
import type { LevelGrade } from "../domain/entities/levalGrades";
import { CreateLevelGrade } from "../domain/usecases/createLevelGrade";
interface IFormCreateUpdateProps{
	onCancel(): void;
	createLevelGrades: CreateLevelGrade;
}
export default class FormCreateUpdate extends React.Component<IFormCreateUpdateProps>{
	formRef = React.createRef<any>();
	onSave = async () => {
		const {createLevelGrades} = this.props
		const value = await this.formRef.current.validateFields()
		let levelGrade: LevelGrade = {
			id: '',
			name: value.name,
			level: value.level,
		}
		console.log(levelGrade)
		await createLevelGrades.create(levelGrade)
	}
	render(){
		return(
			<Card>
				<Row>
					<Form layout="vertical" ref={this.formRef} style={{ width: "100%" }}>
						<Form.Item label='Tên khối' name='name'>
							<Input style={{ width: "100%" }} placeholder="Vui lòng nhập tên khối" required></Input>
						</Form.Item>
						<Form.Item label='Khối' name='level'>
							<InputNumber style={{ width: "100%" }} placeholder="Vui lòng nhập khối" required></InputNumber>
						</Form.Item>
					</Form>
				</Row>
				<Row justify='center'>
					<Button type="dashed" onClick={this.props.onCancel}>Hủy</Button>
					&nbsp;&nbsp;
					<Button type="primary" onClick={this.onSave}>Lưu</Button>
				</Row>
			</Card>
		)
	}
}