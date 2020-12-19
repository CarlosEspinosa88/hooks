import React from 'react'

export default function Search({ search, searchInput, handleSearch }) {
  return (
    <input 
      type="text"
      value={search} 
      ref={searchInput}
      onChange={handleSearch}
    />
  )
}
