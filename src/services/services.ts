import { collection, query, where, getDocs } from "firebase/firestore"

import getFirestore from "@services/firebaseConfig"
import { getRandomNumber } from "../utils/helpers/helpers"

const moviesRef = collection(getFirestore(), "movies")

export const getRandomMovie = async (): Promise<Movie | null> => {
  try {
    const actorQuery = query(
      moviesRef,
      where("id", "==", getRandomNumber(1, 140)),
    )
    const querySnapshot = await getDocs(actorQuery)
    let movie = null
    querySnapshot.forEach((doc) => {
      movie = { ...doc.data() }
    })
    return movie
  } catch (error: any) {
    return error
  }
}

export const getActorsLength = async () => {
  try {
    const actorQuery = query(
      moviesRef,
      where("id", "==", getRandomNumber(1, 140)),
    )
    const querySnapshot = await getDocs(actorQuery)
    let movie = null
    querySnapshot.forEach((doc) => {
      movie = { ...doc.data() }
    })
    return movie
  } catch (error: any) {
    return error
  }
}
