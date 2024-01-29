import React from 'react'
import { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
const auth_uri = 'https://accounts.spotify.com/authorize'
const client_id = 'ad706be7f85f476786a6e38b81389999'
const redirect_uri = 'http://localhost:5173/webapp'

const scopes = ['streaming', 'playlist-read-private',
                'playlist-modify-private', 
                'playlist-modify-public', 'user-read-private', 
                'ugc-image-upload', 
                'user-read-playback-state', 
                'user-modify-playback-state', 
                'user-read-currently-playing', ]

const scopes_joined = scopes.join('%20')

export default function Login() {


    const handleLogin = () => {
        window.location = `${auth_uri}?redirect_uri=${redirect_uri}&client_id=${client_id}&scope=${scopes_joined}&response_type=token&show_dialog=true`

    };
    
    return (
        <div className='login-btn btn'>
            <button onClick={handleLogin()}>Log in to Spotify</button>
        </div>
    )
};
