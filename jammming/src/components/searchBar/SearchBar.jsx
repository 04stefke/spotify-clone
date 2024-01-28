import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SearchBar() {
    const [searchData, setSearchData] = useState([])
    const [value, setValue] = useState('')
    const [token, setToken] = useState('')

    useEffect (()=>{
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }
    },[])

    const getSearchResults = () => {
        axios.get(`https://api.spotify.com/v1/search?type=track&q=${value}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => {
            setSearchData(res.data)
        })
        .catch(error => {
            console.log(error);
        })

    }
  return (
    <div>
      <input type="text" className="searchBar" onChange={(e) => setValue(e.target.value)} />
      <button onClick={getSearchResults}></button>
      <div>
        {searchData?.tracks?.items ? searchData.tracks.items.map((track) => (<p key={track.id}>{track.name}</p>)) : null}
      </div>
    </div>
  )
}
