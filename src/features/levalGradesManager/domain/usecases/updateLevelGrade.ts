import type { ILevelGradesRepository } from "../respositories/iLevelGrades";

export class UpdateLevelGrade {
	levelGradesRepository : ILevelGradesRepository;
	constructor(levelGradesRepository: ILevelGradesRepository) {
		this.levelGradesRepository = levelGradesRepository;
	}
	async update(id: string, levelGrade : any) : Promise<void> {
		return await this.levelGradesRepository.updateLevelGrade(id, levelGrade);
	}
}