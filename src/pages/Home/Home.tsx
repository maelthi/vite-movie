import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import SearchBar from "@molecules/SearchBar/SearchBar"
import FullCard from "@molecules/FullCard/FullCard"
import SemiCard from "@molecules/SemiCard/SemiCard"

import { getRandomMovie } from "@services/services"

import movieBg from "@assets/img/fullCard-home1.png"
import actorsBg from "@assets/img/fullCard-home2.png"

import "./Home.scss"

const Home = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const getMovie = async () => {
    setRandomMovie(await getRandomMovie())
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className="home background">
      <SearchBar />
      <section>
        <h2 className="home__title">Le film du jour</h2>
        {randomMovie && (
          <Link to={`/movies/${randomMovie.id}`}>
            <SemiCard
              title={randomMovie.titre}
              content={randomMovie.resume}
              iconName="read-more-red"
              picture={randomMovie.pochette}
            />
          </Link>
        )}
      </section>
      <section>
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
    </div>
  )
}

export default Home
