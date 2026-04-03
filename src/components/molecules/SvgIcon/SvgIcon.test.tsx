import { render, fireEvent } from "@testing-library/react"
import SvgIcon from "./SvgIcon"

describe("SvgIcon", () => {
  it("rend l'icône avec le bon href", () => {
    const { container } = render(<SvgIcon name="read-more" />)
    const use = container.querySelector("use")
    expect(use?.getAttribute("href")).toBe("#icon-read-more")
  })

  it("applique la className personnalisée", () => {
    const { container } = render(<SvgIcon name="read-more" className="my-class" />)
    const svg = container.querySelector("svg")
    expect(svg?.classList.contains("my-class")).toBe(true)
    expect(svg?.classList.contains("icon")).toBe(true)
  })

  it("appelle onIconClick au clic", () => {
    const onClick = vi.fn()
    const { container } = render(<SvgIcon name="read-more" onIconClick={onClick} />)
    fireEvent.click(container.querySelector("svg")!)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
