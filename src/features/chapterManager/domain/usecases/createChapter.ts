import type { Chapter } from "../entities/chapter";
import type { IChapterRepository } from "../repositories/iChapterRepository";

export class CreateChapter {
	chapterRepository: IChapterRepository

	constructor(chapterRepository: IChapterRepository){
		this.chapterRepository = chapterRepository
	}

	createChapter(chapter: Chapter) {
		return this.chapterRepository.createChapter(chapter);
	}
}