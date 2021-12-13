import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
initializeApp({
  apiKey: "AIzaSyDMPz7EhNHHTFmZ2phl7hmD7DmwoQ6IYNI",
  authDomain: "movieapp-e82a2.firebaseapp.com",
  projectId: "movieapp-e82a2",
})

export default getFirestore
