import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchItems from "./SearchItems"

const movie: Movie = {
  id: 1,
  titre: "Le Parrain",
  resume: "Un chef-d'œuvre",
  pochette: "parrain.jpg",
  genre: "Drame",
  directeur: "Francis Ford Coppola",
  dateSortie: 1972,
  acteurs: ["Al Pacino"],
}

const actor: Actor = {
  id: "42",
  patronyme: "Al Pacino",
  photo: "alpacino.jpg",
  apparitions: ["Le Parrain"],
}

describe("SearchItems", () => {
  it("n'affiche rien si searchResults est null", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchItems searchResults={null} />
      </MemoryRouter>,
    )
    expect(container.firstChild).toBeNull()
  })

  it("affiche le titre du film trouvé", () => {
    render(
      <MemoryRouter>
        <SearchItems searchResults={movie} />
      </MemoryRouter>,
    )
    expect(screen.getByText("Le Parrain")).toBeInTheDocument()
  })

  it("affiche le patronyme de l'acteur trouvé", () => {
    render(
      <MemoryRouter>
        <SearchItems searchResults={actor} />
      </MemoryRouter>,
    )
    expect(screen.getByText("Al Pacino")).toBeInTheDocument()
  })

  it("génère un lien vers la page film", () => {
    render(
      <MemoryRouter>
        <SearchItems searchResults={movie} />
      </MemoryRouter>,
    )
    const link = screen.getByRole("link")
    expect(link.getAttribute("href")).toBe("/movies/1")
  })

  it("génère un lien vers la page acteur", () => {
    render(
      <MemoryRouter>
        <SearchItems searchResults={actor} />
      </MemoryRouter>,
    )
    const link = screen.getByRole("link")
    expect(link.getAttribute("href")).toBe("/actors/42")
  })
})
