import { render, screen } from "@testing-library/react"
import FullCard from "./FullCard"

describe("FullCard", () => {
  it("affiche le titre", () => {
    render(<FullCard title="140 films classiques" backgroundUrl="/img.jpg" />)
    expect(screen.getByText("140 films classiques")).toBeInTheDocument()
  })

  it("affiche la légende si fournie", () => {
    render(<FullCard title="Titre" backgroundUrl="/img.jpg" legend="10 films" />)
    expect(screen.getByText("10 films")).toBeInTheDocument()
  })

  it("n'affiche pas de légende si non fournie", () => {
    render(<FullCard title="Titre" backgroundUrl="/img.jpg" />)
    expect(screen.queryByText("10 films")).not.toBeInTheDocument()
  })

  it("applique le background-image depuis backgroundUrl", () => {
    const { container } = render(<FullCard title="Titre" backgroundUrl="/img.jpg" />)
    const card = container.querySelector(".full-card")
    expect(card?.getAttribute("style")).toContain("/img.jpg")
  })
})
