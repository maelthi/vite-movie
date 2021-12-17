import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import Anime from "react-anime"

import SearchBar from "@molecules/SearchBar/SearchBar"
import FullCard from "@molecules/FullCard/FullCard"
import SemiCard from "@molecules/SemiCard/SemiCard"
import SearchItems from "@molecules/SearchItems/SearchItems"

import { getActors, getMovies, getRandomMovie } from "@services/services"

import movieBg from "@assets/img/fullCard-home1.png"
import actorsBg from "@assets/img/fullCard-home2.png"

import "./Home.scss"

const Home = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [inputValue, setInputValue] = useState<string | "">("")
  const [searchResults, setSearchResults] = useState<Movie | Actor | null>(null)
  const [data, setData] = useState<any[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const getMovie = async () => {
    setRandomMovie(await getRandomMovie())
  }

  const handleInputChange = () => {
    setInputValue(inputRef.current!.value)
  }

  const handleFocus = async (): Promise<void> => {
    const actors = await getActors()
    const movies = await getMovies()

    setData([...actors, ...movies])
  }

  useEffect(() => {
    getMovie()
  }, [])

  useEffect(() => {
    const result = data?.filter(
      (d) =>
        d.patronyme?.toLowerCase() === inputValue ||
        d.titre?.toLowerCase() === inputValue,
    )

    if (!result) return
    setSearchResults(result[0])
  }, [inputValue])

  return (
    <div className="home background">
      <SearchBar
        onInputChange={handleInputChange}
        inputValue={inputValue}
        ref={inputRef}
        onFocusChange={handleFocus}
      />
      {inputValue === "" ? (
        <>
          <Anime delay={400} duration={1000} opacity={[0, 1]} translateY={15}>
            <section className="home__random-movie">
              <h2 className="home__title">Le film du jour</h2>
              {randomMovie && (
                <Link
                  to={`/movies/${randomMovie.id}`}
                  state={{
                    titre: randomMovie.titre,
                    resume: randomMovie.resume,
                    pochette: randomMovie.pochette,
                    genre: randomMovie.genre,
                    directeur: randomMovie.directeur,
                    dateSortie: randomMovie.dateSortie,
                    acteurs: randomMovie.acteurs,
                  }}
                >
                  <SemiCard
                    title={randomMovie.titre}
                    content={randomMovie.resume}
                    iconName="read-more-red"
                    picture={randomMovie.pochette}
                  />
                </Link>
              )}
            </section>
          </Anime>
          <Anime delay={700} duration={1000} opacity={[0, 1]}>
            <section className="home__movies">
              <h2 className="home__title">Films</h2>
              <h3 className="home__subtitle">
                Découvrez les films qui ont fait l'histoire
              </h3>
              <Link to="/movies">
                <FullCard
                  title="140 films classiques"
                  backgroundUrl={movieBg}
                  iconName="read-more"
                />
              </Link>
            </section>
          </Anime>
          <section>
            <h2 className="home__title">Acteurs - actrices</h2>
            <h3 className="home__subtitle">
              Découvrez les acteurs et actrices emblématiques
            </h3>
            <Link to="/actors">
              <FullCard
                title="71 acteurs et actrices de légende"
                backgroundUrl={actorsBg}
                iconName="read-more"
              />
            </Link>
          </section>
        </>
      ) : (
        <SearchItems searchResults={searchResults} />
      )}
    </div>
  )
}

export default Home
