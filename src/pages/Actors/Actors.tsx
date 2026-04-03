import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { getActors } from "@services/services"

import FullCard from "@molecules/FullCard/FullCard"
import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Actors.scss"

const Actors = () => {
  const navigate = useNavigate()
  const [actors, setActors] = useState<Actor[] | null>(null)

  const handleBackClick = () => navigate(-1)

  useEffect(() => {
    const loadActors = async () => {
      const actorsList = await getActors()
      setActors(actorsList.sort((a, b) => a.patronyme?.localeCompare(b.patronyme)))
    }
    loadActors()
  }, [])

  return (
    <div className="actors">
      <SvgIcon
        name="read-more"
        className="actors__icon-back icon--reverse"
        onIconClick={handleBackClick}
      />
      <h4 className="actors__title">Acteurs - actrices</h4>
      <ul>
        {actors
          ? actors.map(({ patronyme, apparitions, photo, id }) => (
              <li className="actors__item" key={id}>
                <Link
                  to={`/actors/${id}`}
                  state={{
                    patronyme,
                    apparitions,
                    photo,
                  }}
                >
                  <FullCard
                    title={patronyme}
                    legend={`${apparitions?.length} films`}
                    backgroundUrl={`/${photo}`}
                    iconName="read-more"
                  />
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export default Actors
