import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../lib/config/firebase.config";

const productCollection = "productos";

export const firestoreService = {
    createDocument: async (data) => {
        try {
            const docRef = await addDoc(collection(db, productCollection), data);
            return {
                status: 'success',
                message: 'Documento creado exitosamente',
                documentId: docRef.id,
            };
        } catch (error) {
            console.error("Error al crear documento:", error);
            return {
                status: 'error',
                message: 'Error al crear el documento',
                error: error,
            };
        }
    },

    // Método para leer todos los documentos
    readAllDocuments: async () => {
        try {
            const querySnapshot = await getDocs(collection(db, productCollection));
            const documents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(documents);
            return {
                status: 'success',
                documents: documents,
            };
        } catch (error) {
            console.error("Error al leer documentos:", error);
            return {
                status: 'error',
                message: 'Error al leer los documentos',
                error: error,
            };
        }
    },

    // Método para leer un documento por ID
    readDocumentById: async (id) => {
        try {
            const docRef = doc(db, productCollection, id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    status: 'success',
                    document: { id: docSnap.id, ...docSnap.data() },
                };
            } else {
                return {
                    status: 'error',
                    message: 'Documento no encontrado',
                };
            }
        } catch (error) {
            console.error("Error al leer documento:", error);
            return {
                status: 'error',
                message: 'Error al leer el documento',
                error: error,
            };
        }
    },

    // Método para actualizar un documento por ID
    updateDocument: async (id, data) => {
        try {
            const docRef = doc(db, productCollection, id);
            await updateDoc(docRef, data);
            return {
                status: 'success',
                message: 'Documento actualizado exitosamente',
            };
        } catch (error) {
            console.error("Error al actualizar documento:", error);
            return {
                status: 'error',
                message: 'Error al actualizar el documento',
                error: error,
            };
        }
    },

    // Método para eliminar un documento por ID
    deleteDocument: async (id) => {
        try {
            const docRef = doc(db, productCollection, id);
            await deleteDoc(docRef);
            return {
                status: 'success',
                message: 'Documento eliminado exitosamente',
            };
        } catch (error) {
            console.error("Error al eliminar documento:", error);
            return {
                status: 'error',
                message: 'Error al eliminar el documento',
                error: error,
            };
        }
    }
};