import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function GetPlaylists() {
    const [token, setToken] = useState('')
    const [playlist, setPlaylist] = useState({})

    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
        }
    }, [])

    const getPlaylist = () => {
        axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            setPlaylist(res.data)
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={getPlaylist}>Get playlist</button>
            {playlist?.items ? playlist.items.map((item) => <p key={item.id}>{item.name}</p>) : null}
        </div>
    )
}
