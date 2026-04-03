import { useEffect, useState, useRef } from "react"

import HomeComponent from "./Home.component"

import { getActors, getMovies, getRandomMovie } from "@services/services"

import "./Home.scss"

const HomeContainer = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [inputValue, setInputValue] = useState<string | "">("")
  const [searchResults, setSearchResults] = useState<Movie | Actor | null>(null)
  const [data, setData] = useState<(Movie | Actor)[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = () => setInputValue(inputRef.current!.value)

  const handleFocus = async (): Promise<void> => {
    if (data) return
    const actors = await getActors()
    const movies = await getMovies()
    setData([...actors, ...movies])
  }

  useEffect(() => {
    getRandomMovie().then(setRandomMovie)
  }, [])

  useEffect(() => {
    const result = data?.filter(
      (d: Movie | Actor) =>
        ("patronyme" in d && d.patronyme?.toLowerCase() === inputValue.toLowerCase()) ||
        ("titre" in d && d.titre?.toLowerCase() === inputValue.toLowerCase()),
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
