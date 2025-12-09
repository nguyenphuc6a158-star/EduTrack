import type { LevelGrade } from "../entities/levalGrades";
import type { ILevelGradesRepository } from "../respositories/iLevelGrades";

export class GetLevelGrades {
	levelGradesRepository : ILevelGradesRepository;
	constructor(levelGradesRepository: ILevelGradesRepository) {
		this.levelGradesRepository = levelGradesRepository;
	}
	async getAll() : Promise<LevelGrade[]> {
		return await this.levelGradesRepository.getLevelGrades();
	}
}