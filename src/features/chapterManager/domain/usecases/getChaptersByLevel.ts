import type { Chapter } from "../entities/chapter";
import type { IChapterRepository } from "../repositories/iChapterRepository";

export class GetChaptersByLevel {
	chapterRepository: IChapterRepository

	constructor(chapterRepository: IChapterRepository){
		this.chapterRepository = chapterRepository
	}

	getAllByLevel(level: number): Promise<Chapter[]>{
		return this.chapterRepository.getAllByLevel(level);
	}
}