import { forwardRef } from "react"
import { Link } from "react-router-dom"

import SearchBar from "@molecules/SearchBar/SearchBar"
import FullCard from "@molecules/FullCard/FullCard"
import SemiCard from "@molecules/SemiCard/SemiCard"
import SearchItems from "@molecules/SearchItems/SearchItems"

import "./Home.scss"

type HomeComponentProps = {
  onInputChange: () => void
  inputValue: string
  onFocus: () => void
  randomMovie: Movie | null
  searchResults: Movie | Actor | null
}

const HomeComponent = forwardRef<HTMLInputElement, HomeComponentProps>(
  ({ onFocus, onInputChange, randomMovie, searchResults, inputValue }, ref) => {
    return (
      <div className="home background">
        <SearchBar
          onInputChange={onInputChange}
          inputValue={inputValue}
          ref={ref}
          onFocusChange={onFocus}
        />
        {inputValue === "" ? (
          <>
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
            <section className="home__movies">
              <h2 className="home__title">Films</h2>
              <h3 className="home__subtitle">
                Découvrez les films qui ont fait l'histoire
              </h3>
              <Link to="/movies">
                <FullCard
                  title="140 films classiques"
                  backgroundUrl="/fullCard-home1.png"
                  iconName="read-more"
                />
              </Link>
            </section>
            <section className="home__actors">
              <h2 className="home__title">Acteurs - actrices</h2>
              <h3 className="home__subtitle">
                Découvrez les acteurs et actrices emblématiques
              </h3>
              <Link to="/actors">
                <FullCard
                  title="71 acteurs et actrices de légende"
                  backgroundUrl="/fullCard-home2.png"
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
  },
)

export default HomeComponent
