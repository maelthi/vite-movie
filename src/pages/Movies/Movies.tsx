import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getMovies } from "@services/services"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"
import SemiCard from "@molecules/SemiCard/SemiCard"

import "./Movies.scss"

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null)

  const getMoviesList = async (): Promise<void> => {
    setMovies(await getMovies())
  }

  const handleBackClick = () => history.back()

  useEffect(() => {
    getMoviesList()
  }, [])

  return (
    <div className="movies">
      <SvgIcon
        name="read-more"
        className="icon-back icon--reverse"
        onClick={handleBackClick}
      />
      <h4 className="movies__title">Films</h4>
      <ul>
        {movies
          ? movies.map(({ titre, resume, pochette, id }) => (
              <Link key={id} to={`/movies/${id}`}>
                <li className="movies__item">
                  <SemiCard
                    title={titre}
                    content={resume}
                    picture={pochette}
                    iconName="read-more-red"
                  />
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  )
}

export default Movies
