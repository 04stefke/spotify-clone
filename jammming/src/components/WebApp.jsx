import React, {useEffect, useState} from 'react'
import GetPlaylists from './getPlaylists/getPlaylists'
import SearchBar from './searchBar/SearchBar'

export default function WebApp() {
  const [tokenKey, setTokenKey] = useState('')
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if(!token && hash){
        token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

        setTokenKey(token);
        window.localStorage.setItem('access_token', token)
    }
},[])
console.log(tokenKey);
  return (
    <div>
      <GetPlaylists token={{tokenKey}} setToken={setTokenKey}/>
      <SearchBar token={tokenKey} setToken={setTokenKey}/>
    </div>
  )
}
