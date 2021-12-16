import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getActors } from "@services/services"
import { getDataLocalStorage, storeDataLocalStorage } from "@helpers/helpers"

import FullCard from "@molecules/FullCard/FullCard"
import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Actors.scss"

const Actors = () => {
  const [actors, setActors] = useState<Actor[] | null>(null)
  console.log("~ actors", actors && actors[70])

  const getActorsList = async (): Promise<void> => {
    const actorsList = await getActors()
    setActors(
      actorsList.sort((a, b) => a.patronyme?.localeCompare(b.patronyme)),
    )
    storeDataLocalStorage("actors", actorsList)
  }

  const handleBackClick = () => history.back()

  useEffect(() => {
    if (JSON.parse(getDataLocalStorage("actors")).length === 0) {
      getActorsList()
      return
    }
    setActors(JSON.parse(getDataLocalStorage("actors")))
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
