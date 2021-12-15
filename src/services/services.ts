import { collection, query, where, getDocs, getDoc } from "firebase/firestore"

import getFirestore from "@services/firebaseConfig"
import { getRandomNumber } from "../utils/helpers/helpers"

const moviesRef = collection(getFirestore(), "movies")
const actorsRef = collection(getFirestore(), "actors")

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

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const moviesQuery = query(moviesRef)
    const querySnapshot = await getDocs(moviesQuery)
    let movies: Movie[] = []
    querySnapshot.forEach((doc) => {
      movies.push(doc.data() as Movie)
    })
    return movies
  } catch (error: any) {
    return error
  }
}

export const getActors = async (): Promise<Actor[]> => {
  try {
    const actorsQueries = query(actorsRef)
    const querySnapshot = await getDocs(actorsQueries)
    let actors: Actor[] = []
    querySnapshot.forEach((doc) => {
      actors.push(doc.data() as Actor)
    })
    return actors
  } catch (error: any) {
    return error
  }
}
