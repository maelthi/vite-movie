import { useEffect } from "react"

import SearchBar from "@molecules/SearchBar/SearchBar"
import FullCard from "@molecules/FullCard/FullCard"
import SemiCard from "@molecules/SemiCard/SemiCard"

import movieBg from "@assets/img/fullCard-home1.png"
import actorsBg from "@assets/img/fullCard-home2.png"

import "./Home.scss"

const Home = () => {
  useEffect(() => {
    // getActors()
  }, [])
  return (
    <div className="home background">
      <SearchBar />
      <section>
        <h2 className="home__title">Le film du jour</h2>
        <SemiCard />
      </section>
      <section>
        <h2 className="home__title">Films</h2>
        <h3 className="home__subtitle">
          Découvrez les films qui ont fait l'histoire
        </h3>
        <FullCard
          title="140 films classiques"
          backgroundUrl={movieBg}
          iconName="read-more"
        />
      </section>
      <section>
        <h2 className="home__title">Acteurs - actrices</h2>
        <h3 className="home__subtitle">
          Découvrez les acteurs et actrices emblématiques
        </h3>
        <FullCard
          title="70 acteurs et actrices de légende"
          backgroundUrl={actorsBg}
          iconName="read-more"
        />
      </section>
    </div>
  )
}

export default Home
