import { SettingFilled } from "@ant-design/icons";
import { Button, Divider, Modal, Select } from "antd";
import React from "react";
import ChapterManager from "./chaptermanager";
import { ChapterRemoteDataSource } from "../data/data/chapterRemoteDataSource";
import { ChapterRepository } from "../data/responsitories/chapterRepository";
import { CreateChapter } from "../domain/usecases/createChapter";
import type { Chapter } from "../domain/entities/chapter";
import { UpdateChapters } from "../domain/usecases/updateChapter";
import DeleteChapter from "../domain/usecases/deleteChapter";
import { GetChaptersByLevel } from "../domain/usecases/getChaptersByLevel";
import { SelectedLevelContext } from "../../../core/presentation/selectedLevelContext";

export default class SelectChapter extends React.Component{
	state = {
		visibleModalChaptermanager: false,
		isloading: false,
		optionsSelect: [] as { value: string; label: string }[],
	}
	static contextType = SelectedLevelContext;
	declare context: number;
	remoteChapter: ChapterRemoteDataSource = new ChapterRemoteDataSource();
	repoChapter: ChapterRepository = new ChapterRepository(this.remoteChapter);
	createChapter: CreateChapter = new CreateChapter(this.repoChapter);
	getChapters: GetChaptersByLevel = new GetChaptersByLevel(this.repoChapter);
	updateChapter: UpdateChapters = new UpdateChapters(this.repoChapter);
	deleteChapter: DeleteChapter = new DeleteChapter(this.repoChapter);
	listChapters: Chapter[] = [];
	componentDidUpdate(): void {
		console.log(this.context)
	}
	componentDidMount  = async () => {
		this.setState({isloading: true});
		console.log(this.context)
		await this.getAll();
		const options = this.listChapters.map((chapter) => ({
			value: chapter.id,
			label: chapter.name,
		}));
		this.setState({ 
			optionsSelect: options,
			isloading: false
		});
	}
	
	getAll = async () => {
		this.setState({isloading: true});
		this.listChapters = await this.getChapters.getAllByLevel(this.context);
		this.setState({isloading: false});
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
								onMouseDown={(e) => e.preventDefault()}
								onClick={this.openModalChapterManager}
							>
								<SettingFilled style={{ fontSize: 18 }}/> Quản lý chương
							</Button>
						</>
						)
					}
					options={this.state.optionsSelect}
				/>
				<Modal
					open={this.state.visibleModalChaptermanager}
					onCancel={() => this.setState({ visibleModalChaptermanager: false })}
					footer={null}
					width={'80vw'}
					title={'Quản lý chương'}
				>
					<ChapterManager
						deleteChapter={this.deleteChapter}
						updateChapter={this.updateChapter}
						listChapters={this.listChapters}
						createChapter={this.createChapter}
						getAllChapters={this.getAll}
					/>
				</Modal>
			</>
		)
	}
}