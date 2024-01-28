import React from 'react'

export default function Logout() {
    const logout = () => {
        localStorage.clear();
    }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
