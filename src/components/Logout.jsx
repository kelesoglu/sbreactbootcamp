import React from 'react'

const Logout = () => {
  const logOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  return <button onClick={logOut}> Click</button>
}

export default Logout