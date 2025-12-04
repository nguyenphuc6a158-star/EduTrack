import type { Chapter } from "../entities/chapter";
import type { IChapterRepository } from "../repositories/iChapterRepository";

export class GetChapters {
	chapterRepository: IChapterRepository

	constructor(chapterRepository: IChapterRepository){
		this.chapterRepository = chapterRepository
	}

	getChapters(): Promise<Chapter[]>{
		return this.chapterRepository.getChapters();
	}
}