import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getActors } from "@services/services"
import { getDataLocalStorage, storeDataLocalStorage } from "@helpers/helpers"

import FullCard from "@molecules/FullCard/FullCard"
import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./Actors.scss"

const Actors = () => {
  const [actors, setActors] = useState<Actor[] | null>(null)

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
      <h4 className="actors__title">Films</h4>
      <ul>
        {actors
          ? actors.map(({ patronyme, apparitions, photo, id }) => (
              <Link
                to={`/actors/${id}`}
                state={{
                  data: { patronyme, apparitions, photo },
                }}
                key={id}
              >
                <li className="actors__item" key={id}>
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
