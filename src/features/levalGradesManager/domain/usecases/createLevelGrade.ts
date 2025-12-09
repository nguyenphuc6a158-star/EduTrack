import type { ILevelGradesRepository } from "../respositories/iLevelGrades";

export class CreateLevelGrade {
	levelGradesRepository : ILevelGradesRepository;
	constructor(levelGradesRepository: ILevelGradesRepository) {
		this.levelGradesRepository = levelGradesRepository;
	}
	async create(levelGrade : any) : Promise<void> {
		return await this.levelGradesRepository.createLevelGrade(levelGrade);
	}
}