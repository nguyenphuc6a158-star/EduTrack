import type { ILevelGradesRepository } from "../respositories/iLevelGrades";

export class DeleteLevelGrade {
	levelGradesRepository : ILevelGradesRepository;
	constructor(levelGradesRepository: ILevelGradesRepository) {
		this.levelGradesRepository = levelGradesRepository;
	}
	async delete(id: string) : Promise<void> {
		return await this.levelGradesRepository.deleteLevelGrade(id);
	}
}