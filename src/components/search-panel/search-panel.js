import React from 'react'

import './search-panel.css'

const SearchPanel = ({ handleSearch, searchWords }) => {
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='type to search'
      onChange={handleSearch}
      value={searchWords}
    />
  )
}

export default SearchPanel
