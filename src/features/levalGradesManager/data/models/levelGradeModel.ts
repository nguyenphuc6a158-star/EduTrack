import type { QueryDocumentSnapshot } from "firebase/firestore";
import type { LevelGrade } from "../../domain/entities/levalGrades";

export class LevelGradeModel implements LevelGrade{
	id: string;
	name: string;
	level: number;
	constructor(id: string, name: string, level: number){
		this.id = id;
		this.name = name;
		this.level = level;
	}
	static fromStore(doc: QueryDocumentSnapshot): LevelGradeModel {
		return new LevelGradeModel(
			doc.id,
			doc.data().name ?? '',
			doc.data().level ?? 0,
		)
	}
	toJson(): Record<string, any> {
		return {
			id: this.id,
			name: this.name,
			level: this.level,
		};
	}
	static fromEntity(e: LevelGrade): LevelGradeModel {
		return new LevelGradeModel(
			e.id,
			e.name,
			e.level,
		);
	}
}