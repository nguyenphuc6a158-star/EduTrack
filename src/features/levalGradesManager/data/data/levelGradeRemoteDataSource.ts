import FirebaseRemoteData from "../../../../core/data/firebaseRemoteDataSource";
import { LevelGradeModel } from "../models/levelGradeModel";

export interface ILevelGradeRemoteDataSource {
	getLevelGrades(): Promise<LevelGradeModel[]>;
	createLevelGrade(levelGrade: LevelGradeModel): Promise<void>;
	updateLevelGrade(id: string, levelGrade: LevelGradeModel): Promise<void>;
	deleteLevelGrade(id: string): Promise<void>;
}
export class LevelGradeRemoteDataSource implements ILevelGradeRemoteDataSource {
	firebaseRemoteData: FirebaseRemoteData;
	constructor() {
		this.firebaseRemoteData = new FirebaseRemoteData();
		this.firebaseRemoteData.collectionName = "levelGrade";
	}
	async createLevelGrade(levelGrade: LevelGradeModel): Promise<void> {
		await this.firebaseRemoteData.add({
			name: levelGrade.name,
			level: levelGrade.level,
		});
	}
	async deleteLevelGrade(id: string): Promise<void> {
		await this.firebaseRemoteData.delete(id);
	}
	async getLevelGrades(): Promise<LevelGradeModel[]> {
		const data = await this.firebaseRemoteData.getAlls();
		return data.map((item) => new LevelGradeModel(
			item.id,
			item.name,
			item.level,
		));
	}
	async updateLevelGrade(id: string, levelGrade: LevelGradeModel): Promise<void> {
		await this.firebaseRemoteData.update(id, {
			id: levelGrade.id,
			name: levelGrade.name,
			level: levelGrade.level,
		});
	}
}