import { collection, query, where, getDocs } from "firebase/firestore"

import getFirestore from "@services/firebaseConfig"
import { getRandomNumber } from "../utils/helpers/helpers"

const moviesRef = collection(getFirestore(), "movies")

export const getRandomMovie = async (): Promise<Movie | null> => {
  try {
    const movieQuery = query(
      moviesRef,
      where("id", "==", getRandomNumber(1, 140)),
    )
    const querySnapshot = await getDocs(movieQuery)
    let movie = null
    querySnapshot.forEach((doc) => {
      movie = { ...doc.data() }
    })
    return movie
  } catch (error: any) {
    return error
  }
}

export const getMovies = async () => {
  try {
    const moviesQuery = query(moviesRef)
    const querySnapshot = await getDocs(moviesQuery)
    let movies: Movie[] = []
    querySnapshot.forEach((doc) => {
      console.log("~ doc", doc.data())

      movies.push(doc.data() as Movie)
    })
    return movies
  } catch (error: any) {
    return error
  }
}
