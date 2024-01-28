import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function GetPlaylists() {
    const [token, setToken] = useState('')
    const [playlist, setPlaylist] = useState({})
    const [playlistTracks, setPlaylistTracks] = useState({})
    const [savedId, setSavedId] = useState('')
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

    const saveId = (key) => {
        setSavedId(key)
    }

    const getPlaylistData = () => {
        
        axios.get(`https://api.spotify.com/v1/playlists/${savedId}/tracks`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => {
            setPlaylistTracks(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    } 

    return (
        <div>
            <button onClick={getPlaylist}>Get playlist</button>
            {playlist?.items ? playlist.items.map((item) => <p key={item.id} onClick={saveId(item.id)}>{item.name}</p>) : null}
            {playlistTracks?.items ? playlistTracks.items.map((track) => <p key={track.id}>{track.name}</p>) : null}
        </div>
    )
}
