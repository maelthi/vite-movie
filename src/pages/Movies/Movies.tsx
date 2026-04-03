import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { getMovies } from "@services/services"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"
import SemiCard from "@molecules/SemiCard/SemiCard"

import "./Movies.scss"

const Movies = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState<Movie[] | null>(null)

  const handleBackClick = () => navigate(-1)

  useEffect(() => {
    const loadMovies = async () => {
      const moviesList = await getMovies()
      setMovies(moviesList)
    }
    loadMovies()
  }, [])

  useEffect(() => window.scrollTo(0, 0), [])

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
