import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getActors } from "@services/services"

import FullCard from "@molecules/FullCard/FullCard"
import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Actors.scss"

const Actors = () => {
  const [actors, setActors] = useState<Actor[] | null>(null)
  console.log("~ actors", actors)

  const getActorsList = async (): Promise<void> => {
    setActors(await getActors())
  }

  const handleBackClick = () => history.back()

  useEffect(() => {
    getActorsList()
  }, [])

  return (
    <div className="actors">
      <SvgIcon
        name="read-more"
        className="icon-back icon--reverse"
        onClick={handleBackClick}
      />
      <h4 className="actors__title">Films</h4>
      <ul>
        {actors
          ? actors.map(({ patronyme, apparitions, photo, id }) => (
              <Link key={id} to={`/actors/${id}`}>
                <li className="actors__item">
                  <FullCard
                    title={patronyme}
                    legend={`${apparitions?.length} films`}
                    backgroundUrl={`src/assets/img/${photo}`}
                    iconName="read-more"
                  />
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  )
}

export default Actors
