import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import type { Chapter } from "../../domain/entities/chapter";

export class ChapterModel implements Chapter{
	id: string;
	name: string;
	category: string;

	constructor(id: string, name: string, category: string){
		this.id = id;
		this.name = name;
		this.category = category
	}
	static fromStore(doc: QueryDocumentSnapshot<DocumentData>): ChapterModel {
		const data = doc.data();
		return new ChapterModel(
			doc.id,
			data.name ?? '',
			data.category ?? '',
		)
	}
	toJson(): Record<string, any> {
		return {
			id: this.id,
			name: this.name,
			category: this.category,
		};
	}
	static fromEntity(e: Chapter): ChapterModel {
		return new ChapterModel(
			e.id,
			e.name,
			e.category,
		);
	}
}