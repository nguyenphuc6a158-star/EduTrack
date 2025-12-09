import type { LevelGrade } from "../../domain/entities/levalGrades";
import type { ILevelGradesRepository } from "../../domain/respositories/iLevelGrades";
import type { ILevelGradeRemoteDataSource } from "../data/levelGradeRemoteDataSource";
import type { LevelGradeModel } from "../models/levelGradeModel";

export class LevelGradeRepository implements ILevelGradesRepository{
	private remoteDataSource: ILevelGradeRemoteDataSource;
	constructor(remoteDataSource: ILevelGradeRemoteDataSource){
		this.remoteDataSource = remoteDataSource;
	}
	async getLevelGrades(): Promise<LevelGrade[]> {
		return await this.remoteDataSource.getLevelGrades();
	}
	async createLevelGrade(levelGrade: LevelGradeModel): Promise<void> {
		return await this.remoteDataSource.createLevelGrade(levelGrade);
	}
	async updateLevelGrade(id: string, levelGrade: LevelGradeModel): Promise<void> {
		return await this.remoteDataSource.updateLevelGrade(id, levelGrade);
	}
	async deleteLevelGrade(id: string): Promise<void> {
		return await this.remoteDataSource.deleteLevelGrade(id);
	}
}