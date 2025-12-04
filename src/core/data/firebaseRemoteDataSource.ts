import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default class FirebaseRemoteData {
	collectionName: string = '';
	// Thêm dữ liệu
	async add(item: any) {
		try {
			const docRef = await addDoc(collection(db, this.collectionName),item);
			console.log("Add success:", docRef.id);
			return docRef.id;
		} catch (error) {
			console.error("Add error:", error);
			throw error;
		}
	}
	async getByid(id: string){
		try{
			const docRef = doc(db, this.collectionName, id);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
				return docSnap.data();
			} else {
				console.log("No such document!");
				return null;
			}
		} catch (error) {
			console.error("Error getting document:", error);
			return null;
		}
	}
	// Lấy danh sách
	async getAlls(): Promise<any[]> {
		try {
			const querySnapshot = await getDocs(collection(db, this.collectionName));
			return querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
		}));
		} catch (error) {
			console.error("Get error:", error);
			throw error;
		}
	}

	// Update
	async update(id: string, data: any) {
		try {
			const docRef = doc(db, this.collectionName, id);
			await updateDoc(docRef, data);
			console.log("Update success");
		} catch (error) {
			console.error("Update error:", error);
			throw error;
		}
	}

	// Delete
	async delete(id: string) {
		try {
			const docRef = doc(db, this.collectionName, id);
			await deleteDoc(docRef);
			console.log("Delete success");
		} catch (error) {
			console.error("Delete error:", error);
			throw error;
		}
	}
}
