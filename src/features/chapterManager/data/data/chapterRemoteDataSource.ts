import FirebaseRemoteData from "../../../../core/data/firebaseRemoteDataSource";
import type { ChapterModel } from "../models/chapterModel";

export interface IChapterRemoteDataSource {
	// getChapters(): Promise<ChapterModel[]>;
	// getChapter(id: string): Promise<ChapterModel>;
	createChapter(chapter: ChapterModel): Promise<void>;
	// updateChapter(chapter: ChapterModel): Promise<void>;
	// deleteChapter(chapter: ChapterModel): Promise<void>;
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
			category: chapter.category
		});
	}
}