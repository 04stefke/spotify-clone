import { useState } from 'react'
import './App.css'

import Login from './components/login/login'
import {Route, Routes } from 'react-router-dom'

import WebApp from './components/WebApp'

function App() {

  return (
      <div>
        <Routes >
          <Route exact path='/' element={<Login/>} />
          <Route path='/webapp' element={<WebApp />} />
        </Routes >
      </div>
  )
}

export default App
