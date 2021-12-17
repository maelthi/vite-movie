import { useLocation } from "react-router-dom"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Movie.scss"

const Movie = () => {
  const {
    state: { titre, resume, pochette, genre, directeur, dateSortie, acteurs },
  } = useLocation()

  const handleBackClick = () => history.back()

  return (
    <div className="movie">
      <SvgIcon
        name="read-more"
        onIconClick={handleBackClick}
        className="movie__back-icon icon--reverse"
      />
      <div
        className="movie__picture"
        style={{
          backgroundImage: `linear-gradient(rgba(236, 234, 236, 0.1), rgba(49, 32, 55, 0.8)), url(/${pochette})`,
        }}
      />
      <section className="movie__content">
        {titre && <h1 className="movie__title">{titre}</h1>}
        {dateSortie && <p className="movie__date">{dateSortie}</p>}
        {genre && directeur && (
          <p className="movie__genre">
            Un film {genre} de <span>{directeur}</span>
          </p>
        )}
        <ul>
          Avec
          {acteurs &&
            acteurs.map((acteur: string, id: number) => (
              <li className="movie__actors-item" key={id}>
                {" "}
                {acteur}
                {id !== acteurs.length - 1 ? "," : ""}{" "}
              </li>
            ))}
        </ul>
        {resume && <p className="movie__resume">{resume}</p>}
      </section>
    </div>
  )
}

export default Movie
