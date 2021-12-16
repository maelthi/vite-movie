import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getMovies } from "@services/services"
import { getDataLocalStorage, storeDataLocalStorage } from "@helpers/helpers"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"
import SemiCard from "@molecules/SemiCard/SemiCard"

import "./Movies.scss"

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null)

  const getMoviesList = async (): Promise<void> => {
    const moviesList = await getMovies()
    setMovies(moviesList)
    storeDataLocalStorage("movies", moviesList)
  }

  const handleBackClick = () => history.back()

  useEffect(() => {
    if (JSON.parse(getDataLocalStorage("movies")).length === 0) {
      getMoviesList()
      return
    }
    setMovies(JSON.parse(getDataLocalStorage("movies")))
  }, [])

  return (
    <div className="movies">
      <SvgIcon
        name="read-more"
        className="movies__icon-back icon--reverse"
        onIconClick={handleBackClick}
      />
      <h4 className="movies__title">Films</h4>
      <ul>
        {movies
          ? movies.map(
              ({
                titre,
                resume,
                pochette,
                id,
                genre,
                directeur,
                dateSortie,
                acteurs,
              }) => (
                <li className="movies__item" key={id}>
                  <Link
                    to={`/movies/${id}`}
                    state={{
                      titre,
                      resume,
                      pochette,
                      genre,
                      directeur,
                      dateSortie,
                      acteurs,
                    }}
                  >
                    <SemiCard
                      title={titre}
                      content={resume}
                      picture={pochette}
                      iconName="read-more-red"
                    />
                  </Link>
                </li>
              ),
            )
          : null}
      </ul>
    </div>
  )
}

export default Movies
