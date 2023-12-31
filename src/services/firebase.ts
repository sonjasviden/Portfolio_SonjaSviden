import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { collection, DocumentData, CollectionReference } from "firebase/firestore"
import { Image, Project, Projects } from "../types/projects.types"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Get Firestore instance
export const db = getFirestore(app)

// Get Storage instance
export const storage = getStorage(app)

// DB collection response
const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
}

// Export collections references
export const projectsCol = createCollection<Projects>("project")
export const projectCol = createCollection<Project>("project")
export const imageCol = createCollection<Image>("images")


export default app
