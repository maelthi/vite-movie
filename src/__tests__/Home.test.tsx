import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HomeContainer from "@pages/Home/Home.container"
import * as services from "@services/services"

const mockMovie: Movie = {
  id: 1,
  titre: "Le Parrain",
  resume: "Un chef-d'œuvre de Coppola",
  pochette: "parrain.jpg",
  genre: "Drame",
  directeur: "Francis Ford Coppola",
  dateSortie: 1972,
  acteurs: ["Al Pacino", "Marlon Brando"],
}

const mockActor: Actor = {
  id: "42",
  patronyme: "Al Pacino",
  photo: "alpacino.jpg",
  apparitions: ["Le Parrain"],
}

vi.mock("@services/services", () => ({
  getRandomMovie: vi.fn(),
  getMovies: vi.fn(),
  getActors: vi.fn(),
  getMovieByName: vi.fn(),
}))

const renderHome = () =>
  render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>,
  )

beforeEach(() => {
  vi.mocked(services.getRandomMovie).mockResolvedValue(mockMovie)
  vi.mocked(services.getMovies).mockResolvedValue([mockMovie])
  vi.mocked(services.getActors).mockResolvedValue([mockActor])
})

describe("HomeContainer (intégration)", () => {
  it("affiche les sections principales", async () => {
    renderHome()
    await waitFor(() =>
      expect(screen.getByText("Le film du jour")).toBeInTheDocument(),
    )
    expect(screen.getByText("Films")).toBeInTheDocument()
    expect(screen.getByText("Acteurs - actrices")).toBeInTheDocument()
  })

  it("affiche le film aléatoire après chargement", async () => {
    renderHome()
    await waitFor(() => expect(screen.getByText("Le Parrain")).toBeInTheDocument())
  })

  it("affiche le résultat de recherche pour un film", async () => {
    renderHome()
    await waitFor(() => expect(screen.getByText("Le film du jour")).toBeInTheDocument())

    const input = screen.getByPlaceholderText("Rechercher")
    fireEvent.focus(input)
    await waitFor(() => expect(services.getMovies).toHaveBeenCalled())

    fireEvent.change(input, { target: { value: "Le Parrain" } })
    await waitFor(() =>
      expect(screen.getAllByText("Le Parrain").length).toBeGreaterThan(0),
    )
  })

  it("affiche le résultat de recherche pour un acteur", async () => {
    renderHome()
    await waitFor(() => expect(screen.getByText("Le film du jour")).toBeInTheDocument())

    const input = screen.getByPlaceholderText("Rechercher")
    fireEvent.focus(input)
    await waitFor(() => expect(services.getActors).toHaveBeenCalled())

    fireEvent.change(input, { target: { value: "Al Pacino" } })
    await waitFor(() =>
      expect(screen.getByText("Al Pacino")).toBeInTheDocument(),
    )
  })
})
