import { render, screen } from "@testing-library/react"
import SemiCard from "./SemiCard"

describe("SemiCard", () => {
  const defaultProps = {
    title: "Le Parrain",
    content: "Un film de Francis Ford Coppola",
    iconName: "read-more-red",
    picture: "parrain.jpg",
  }

  it("affiche le titre", () => {
    render(<SemiCard {...defaultProps} />)
    expect(screen.getByText("Le Parrain")).toBeInTheDocument()
  })

  it("affiche le contenu si moins de 200 caractères", () => {
    render(<SemiCard {...defaultProps} />)
    expect(screen.getByText("Un film de Francis Ford Coppola")).toBeInTheDocument()
  })

  it("tronque le contenu à 200 caractères", () => {
    const longContent = "a".repeat(250)
    render(<SemiCard {...defaultProps} content={longContent} />)
    expect(screen.getByText("a".repeat(200) + "...")).toBeInTheDocument()
  })

  it("applique la classe CSS dérivée du nom de la photo", () => {
    const { container } = render(<SemiCard {...defaultProps} />)
    const illustration = container.querySelector(".semi-card__illustration")
    expect(illustration?.classList.contains("parrain")).toBe(true)
  })
})
