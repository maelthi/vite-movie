import { useEffect, useState, useRef } from "react"

import HomeComponent from "./Home.component"

import { getActors, getMovies, getRandomMovie } from "@services/services"
import { getDataLocalStorage, storeDataLocalStorage } from "@helpers/helpers"

import "./Home.scss"

const HomeContainer = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [inputValue, setInputValue] = useState<string | "">("")
  const [searchResults, setSearchResults] = useState<Movie | Actor | null>(null)
  const [data, setData] = useState<any[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const getMovie = async () => setRandomMovie(await getRandomMovie())

  const handleInputChange = () => setInputValue(inputRef.current!.value)

  const handleFocus = async (): Promise<void> => {
    if (
      JSON.parse(getDataLocalStorage("movies")).length === 0 ||
      JSON.parse(getDataLocalStorage("actors")).length === 0
    ) {
      const actors = await getActors()
      const movies = await getMovies()
      storeDataLocalStorage("movies", movies)
      storeDataLocalStorage("actors", actors)
      setData([...actors, ...movies])
      return
    }

    setData([
      ...JSON.parse(
        getDataLocalStorage("actors"),
        ...JSON.parse(getDataLocalStorage("movies")),
      ),
    ])
  }

  useEffect(() => {
    getMovie()
  }, [])

  useEffect(() => {
    const result = data?.filter(
      (d) =>
        d.patronyme?.toLowerCase() === inputValue.toLowerCase() ||
        d.titre?.toLowerCase() === inputValue.toLowerCase(),
    )

    if (!result) return
    setSearchResults(result[0])
  }, [inputValue])

  return (
    <HomeComponent
      searchResults={searchResults}
      onFocus={handleFocus}
      onInputChange={handleInputChange}
      randomMovie={randomMovie}
      inputValue={inputValue}
      ref={inputRef}
    />
  )
}

export default HomeContainer
