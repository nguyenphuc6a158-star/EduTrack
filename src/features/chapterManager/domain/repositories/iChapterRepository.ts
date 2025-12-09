import type { Chapter } from "../entities/chapter";

export interface IChapterRepository{
	getAllByLevel(level: number): Promise<Chapter[]>;
	updateChapter(id:string,chapter: Chapter): Promise<void>;
	createChapter(chapter: Chapter): Promise<void>;
	deleteChapter(id: string): Promise<void>
}