import { Link } from "react-router-dom"

import { isMovie } from "@helpers/helpers"

import "./SearchItems.scss"

type SearchItemsProps = {
  searchResults: Movie | Actor
}

const SearchItems = ({ searchResults }: SearchItemsProps) => {
  const getRedirectionUrl = (searchResults: Movie | Actor | null) =>
    searchResults && isMovie(searchResults)
      ? `/movies/${searchResults?.id}`
      : `/actors/${searchResults?.id}`

  const result = (
    <Link to={getRedirectionUrl(searchResults)} state={searchResults}>
      {searchResults && (
        <p className="search-item">
          {searchResults?.titre || searchResults?.patronyme}
        </p>
      )}
    </Link>
  )

  return searchResults ? result : null
}

export default SearchItems
