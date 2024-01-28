import { useState } from 'react'
import './App.css'
import GetPlaylists from './components/getPlaylists/getPlaylists'
import Login from './components/login/login'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const loginCheck = () => {
    console.log(loggedIn)
    setLoggedIn(true)
  }
  return (
    <Router>
      <div>
        <Routes >
          <Route exact path='/' element={loggedIn ? <GetPlaylists /> : <Login onLoginSuccess={loginCheck} />}></Route>
          <Route path='/webapp' element={loggedIn ? <GetPlaylists /> : <Navigate to="/" />}></Route>
        </Routes >
      </div>
    </Router>
  )
}

export default App
