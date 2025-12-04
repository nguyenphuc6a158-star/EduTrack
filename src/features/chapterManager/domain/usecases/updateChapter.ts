import type { Chapter } from "../entities/chapter";
import type { IChapterRepository } from "../repositories/iChapterRepository";

export class UpdateChapters {
	chapterRepository: IChapterRepository

	constructor(chapterRepository: IChapterRepository){
		this.chapterRepository = chapterRepository
	}

	updateChapter (chapter: Chapter): Promise<void>{
		return this.chapterRepository.updateChapter(chapter);
	}
}