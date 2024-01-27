
import './App.css'
import { spotify } from './api/api'

function App() {

    const logout = () => {
      window.localStorage.removeItem('token')
      window.location = 'http://localhost:5173'
    }
    const login = () => {
      spotify.getAccessToken()
    }
  return (
    <div>
      {!window.localStorage.getItem('token') ? <button onClick={login}>Login</button> : <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default App
