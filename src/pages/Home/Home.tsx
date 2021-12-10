import SearchBar from "@molecules/SearchBar/SearchBar"
import Card from "@molecules/Card/Card"
import "./Home.scss"

const Home = () => {
  return (
    <div className="container background">
      <SearchBar />
      <section>
        <h2 className="title">Le film du jour</h2>
      </section>
      <section>
        <h2 className="title">Films</h2>
        <h3>Découvrez les films qui ont fait l'histoire</h3>
        <Card />
      </section>
      <section>
        <h2 className="title">Acteurs - actrices</h2>
        <h3>Découvrez les acteurs et actrices emblématiques</h3>
        <Card />
      </section>
    </div>
  )
}

export default Home
