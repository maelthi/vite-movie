import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { getDataLocalStorage } from "@helpers/helpers"
import { getMovieByName } from "@services/services"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Actor.scss"

const Actor = () => {
  const navigate = useNavigate()
  const [movieId, setMovieId] = useState<number>()

  const {
    state: { patronyme, apparitions, photo },
  } = useLocation()

  const handleBackClick = () => history.back()

  const handleRedirection = async (movieName: string): Promise<void> => {
    const moviesList = JSON.parse(getDataLocalStorage("movies"))
    let currentMovie = null
    if (moviesList.length > 0) {
      currentMovie = moviesList.filter(
        (movie: Movie) => movie.titre === movieName,
      )
      setMovieId(currentMovie.id)
      return
    }

    currentMovie = await getMovieByName(movieName)
    if (!currentMovie) return
    setMovieId(currentMovie.id)
  }

  useEffect(() => {
    if (!movieId) return
    navigate(`/movies/${movieId}`)
  }, [movieId])

  return (
    <div className="actor">
      <SvgIcon
        name="read-more"
        onIconClick={handleBackClick}
        className="actor__back-icon icon--reverse"
      />
      <div
        className="actor__picture"
        style={{
          backgroundImage: `linear-gradient(rgba(236, 234, 236, 0.1), rgba(49, 32, 55, 0.8)), url(/${photo})`,
        }}
      />
      <section className="actor__content">
        {patronyme && <h1 className="actor__title">{patronyme}</h1>}
        {apparitions.length > 0 && (
          <ul>
            {apparitions.map((apparition: string, id: number) => (
              <li
                key={id}
                className="actor__item"
                onClick={() => handleRedirection(apparition)}
              >
                <p>{apparition}</p>
                {movieId && <SvgIcon name="read-more-red" />}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Actor
