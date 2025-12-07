import type { Chapter } from "../entities/chapter";

export interface IChapterRepository{
	getChapters(): Promise<Chapter[]>;
	// getChapterById(id: string): Promise<Chapter | null>;
	updateChapter(id:string,chapter: Chapter): Promise<void>;
	createChapter(chapter: Chapter): Promise<void>;
	deleteChapter(id: string): Promise<void>
}