import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import type { Chapter } from "../../domain/entities/chapter";

export class ChapterModel implements Chapter{
	id: string;
	name: string;
	category: string;
	level: number;

	constructor(id: string, name: string, category: string, level: number){
		this.id = id;
		this.name = name;
		this.category = category;
		this.level = level;
	}
	static fromStore(doc: QueryDocumentSnapshot<DocumentData>): ChapterModel {
		const data = doc.data();
		return new ChapterModel(
			doc.id,
			data.name ?? '',
			data.category ?? '',
			data.level ?? -1,
		)
	}
	toJson(): Record<string, any> {
		return {
			id: this.id,
			name: this.name,
			category: this.category,
			level: this.level,
		};
	}
	static fromEntity(e: Chapter): ChapterModel {
		return new ChapterModel(
			e.id,
			e.name,
			e.category,
			e.level,
		);
	}
}