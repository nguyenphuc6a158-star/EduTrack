import type { IChapterRepository } from "../../domain/repositories/iChapterRepository";
import type { IChapterRemoteDataSource } from "../data/chapterRemoteDataSource";
import type { ChapterModel } from "../models/chapterModel";

export class ChapterRepository implements IChapterRepository{
	private remoteDataSource: IChapterRemoteDataSource
	constructor(remoteDataSource: IChapterRemoteDataSource){
		this.remoteDataSource = remoteDataSource
	}
	async createChapter(chapter: ChapterModel): Promise<void> {
		return await this.remoteDataSource.createChapter(chapter);
	}
	// async getChapters(): Promise<ChapterModel[]> {
	// 	return await this.remoteDataSource.getChapters();
	// }
}