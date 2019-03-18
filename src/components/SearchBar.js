import React from 'react'

const SearchForm = props => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search Text"/>
        <br />
        <input type="checkbox" /> Only show products in stock
      </form>
    </div>
  )
}

export default SearchForm
