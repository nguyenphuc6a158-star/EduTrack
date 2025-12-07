import type { IChapterRepository } from "../repositories/iChapterRepository";

export default class DeleteChapter {
	chapterRepository: IChapterRepository;
	constructor(chapterRepository: IChapterRepository){
		this.chapterRepository = chapterRepository;
	}
	deleteChapter (id: string) : Promise<void> {
		return this.chapterRepository.deleteChapter(id);
	}
}