import { useState } from 'react'
import './App.css'
import GetPlaylists from './components/getPlaylists/getPlaylists'
import Login from './components/login/login'
import {Route, Routes } from 'react-router-dom'

function App() {

  return (
      <div>
        <Routes >
        <Route exact path='/' element={<Login/>}>

          </Route>
          <Route path='/webapp' element={<GetPlaylists />}>
  
          </Route>
        </Routes >
      </div>
  )
}

export default App
