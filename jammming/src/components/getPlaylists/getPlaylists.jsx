import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PlaylistsTracks from './playlistsData/PlaylistsTracks'

export default function GetPlaylists() {
    const [playlist, setPlaylist] = useState({})
    const [savedId, setSavedId] = useState('')
    const token = window.localStorage.getItem('access_token')
    const [playlistTracks, setPlaylistTracks] = useState([])
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
        console.log(key)
        getPlaylistData(savedId)
    }

    const getPlaylistData = (savedId) => {
        
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
            {playlist?.items ? playlist.items.map((item) => 
            (<div key={item.id} onClick={() => saveId(item.id)}>
                <p>{item.name}</p>
                </div>)
            ) : null}
            {playlistTracks?.items ? playlistTracks.items.map(item => (<p key={item.track.id}>{item.track.name}</p>)):null}
            
        </div>
    )
}
