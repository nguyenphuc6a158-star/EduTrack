import type { LevelGrade } from "../entities/levalGrades";

export interface ILevelGradesRepository {
	getLevelGrades(): Promise<LevelGrade[]>;
	updateLevelGrade(id: string, LevelGrade: LevelGrade): Promise<void>;
	deleteLevelGrade(id: string): Promise<void>;
	createLevelGrade(LevelGrade: LevelGrade): Promise<void>;
}