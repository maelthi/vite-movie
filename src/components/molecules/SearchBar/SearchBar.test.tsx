import { render } from "@testing-library/react"
import SearchBar from "./SearchBar"

describe("SearchBar", () => {
  const defaultProps = {
    onInputChange: jest.fn(),
    inputValue: "Paul Newman",
    onFocusChange: jest.fn(),
  }
  it("should render component", () => {
    const { container } = render(<SearchBar {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
