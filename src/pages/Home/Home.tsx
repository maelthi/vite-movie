import SearchBar from "@molecules/SearchBar/SearchBar"
import FullCard from "@molecules/FullCard/FullCard"

import movieBg from "@assets/img/fullCard-home1.png"
import actorsBg from "@assets/img/fullCard-home2.png"

import "./Home.scss"

const Home = () => {
  return (
    <div className="home background">
      <SearchBar />
      <section>
        <h2 className="home__title">Le film du jour</h2>
      </section>
      <section>
        <h2 className="home__title">Films</h2>
        <h3 className="home__subtitle">
          Découvrez les films qui ont fait l'histoire
        </h3>
        <FullCard title="140 films classiques" backgroundUrl={movieBg} />
      </section>
      <section>
        <h2 className="home__title">Acteurs - actrices</h2>
        <h3 className="home__subtitle">
          Découvrez les acteurs et actrices emblématiques
        </h3>
        <FullCard
          title="70 acteurs et actrices de légende"
          backgroundUrl={actorsBg}
        />
      </section>
    </div>
  )
}

export default Home
