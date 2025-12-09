import FirebaseRemoteData from "../../../../core/data/firebaseRemoteDataSource";
import { ChapterModel } from "../models/chapterModel";

export interface IChapterRemoteDataSource {
	getAllByLevel(level: number): Promise<ChapterModel[]>;
	// getChapter(id: string): Promise<ChapterModel>;
	createChapter(chapter: ChapterModel): Promise<void>;
	updateChapter(id: string, chapter: ChapterModel): Promise<void>;
	deleteChapter(id: string): Promise<void>;
}

export class ChapterRemoteDataSource implements IChapterRemoteDataSource{
	firebaseRemoteData: FirebaseRemoteData;
	constructor(){
		this.firebaseRemoteData = new FirebaseRemoteData();
		this.firebaseRemoteData.collectionName = 'chapter'
	}

	async createChapter(chapter: ChapterModel): Promise<void> {
		await this.firebaseRemoteData.add({	
			name: chapter.name,
			category: chapter.category,
			level: chapter.level
		});
	}
	async getAllByLevel(level: number): Promise<ChapterModel[]> {
		const data = await this.firebaseRemoteData.getAllByLevel(level);
		return data.map((item)=> new ChapterModel(
			item.id,
			item.name,
			item.category,
			item.level,
		));
	}
	async updateChapter(id: string, chapter: ChapterModel): Promise<void> {
		await this.firebaseRemoteData.update(id, {
			name: chapter.name,
			category: chapter.category,
			level: chapter.level,
		});
	}
	async deleteChapter(id: string): Promise<void> {
		await this.firebaseRemoteData.delete(id);
	}
}