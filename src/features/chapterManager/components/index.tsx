import { SettingFilled } from "@ant-design/icons";
import { Button, Divider, Modal, Select } from "antd";
import React from "react";
import ChapterManager from "./chaptermanager";

export default class SelectChapter extends React.Component{
	state = {
		visibleModalChaptermanager: false
	}
	handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};
	openModalChapterManager = () => {
		this.setState({visibleModalChaptermanager: true})
	}
	render(){
		return(
			<>
				<Select
					defaultValue="lucy"
					style={{ width: 300, height:40 }}
					onChange={(value)=>this.handleChange(value)}
					allowClear={true}
					listHeight={150}
					placeholder="Vui lòng chọn chương"
					popupRender={(menu) => (
						<>
							{menu}
							<Divider style={{ margin: "4px 0" }} />
							<Button
								type="link"
								block
								onMouseDown={(e) => e.preventDefault()} // giữ dropdown mở khi click
								onClick={this.openModalChapterManager}
							>
								<SettingFilled style={{ fontSize: 18 }}/> Quản lý chương
							</Button>
						</>
						)
					}
					options={[
						{ value: 'jack', label: 'Jack' },
						{ value: 'lucy', label: 'Lucy' },
						{ value: 'Yiminghe', label: 'yiminghe' },
						{ value: 'disabled', label: 'Disabled',},
					]}
				/>
				<Modal
					open={this.state.visibleModalChaptermanager}
					onCancel={() => this.setState({ visibleModalChaptermanager: false })}
					footer={null}
					width={'80vw'}
					title={'Quanr lý chương'}
				>
					<ChapterManager/>
				</Modal>
			</>
		)
	}
}