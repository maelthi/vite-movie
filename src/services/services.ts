import { collection, query, where, getDocs } from "firebase/firestore"

import getFirestore from "@services/firebaseConfig"

const moviesRef = collection(getFirestore(), "movies")

type GetActorsFunction = () => {} | string
export const getMovies = async (): Promise<GetActorsFunction> => {
  try {
    const actorQuery = query(moviesRef, where("id", "==", 60))
    const querySnapshot = await getDocs(actorQuery)
    let movie = {}
    querySnapshot.forEach((doc) => {
      movie = { ...doc.data() }
    })
    if (movie !== {}) {
      return movie
    }
  } catch (error) {
    return error
  }
  return "toto"
}
