import moviesData from "../../movies.json"
import actorsData from "../../actors.json"
import { getRandomNumber } from "@helpers/helpers"

export const getRandomMovie = async (): Promise<Movie> => {
  return moviesData[getRandomNumber(0, moviesData.length - 1)] as unknown as Movie
}

export const getMovies = async (): Promise<Movie[]> => {
  return moviesData as unknown as Movie[]
}

export const getActors = async (): Promise<Actor[]> => {
  return actorsData as unknown as Actor[]
}

export const getMovieByName = async (movieName: string): Promise<Movie | null> => {
  return (
    (moviesData as unknown as Movie[]).find((movie) => movie.titre === movieName) ?? null
  )
}
