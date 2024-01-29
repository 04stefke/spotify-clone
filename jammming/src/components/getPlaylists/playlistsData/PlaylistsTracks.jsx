import React, { useState } from 'react'

const PlaylistsTracks = () => {
    const [playlistTracks, setPlaylistTracks] = useState([])

    

  return (
    <div>
      {playlistTracks?.items.track ? playlistTracks.items.track.map((item,indx) => (<p key={indx}>{item.name}</p>)) : null}
    </div>
  )
}

export default PlaylistsTracks
