import { render } from "@testing-library/react"
import SearchBar from "./SearchBar"

describe("SearchBar", () => {
  const defaultProps = {
    onInputChange: vi.fn(),
    inputValue: "Paul Newman",
    onFocusChange: vi.fn(),
  }
  it("should render component", () => {
    const { container } = render(<SearchBar {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
