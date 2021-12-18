import { forwardRef } from "react"

import "./SearchBar.scss"

type SearchBarProps = {
  onInputChange: () => void
  inputValue: string | ""
  onFocusChange: () => void
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onInputChange, inputValue, onFocusChange }, ref) => (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Rechercher"
        value={inputValue}
        ref={ref}
        onChange={() => onInputChange()}
        onFocus={() => onFocusChange()}
      />
    </div>
  ),
)

export default SearchBar
