import React from 'react'
import GetPlaylists from './getPlaylists/getPlaylists'
import SearchBar from './searchBar/SearchBar'
import Logout from './login/logout'

export default function WebApp() {
  return (
    <div>
      <GetPlaylists/>
      <SearchBar/>
      {/* <Logout/> */}
    </div>
  )
}
