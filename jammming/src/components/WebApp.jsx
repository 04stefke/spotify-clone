import React from 'react'
import GetPlaylists from './getPlaylists/getPlaylists'
import SearchBar from './searchBar/SearchBar'

export default function WebApp() {
  return (
    <div>
      <GetPlaylists/>
      <SearchBar/>
    </div>
  )
}
