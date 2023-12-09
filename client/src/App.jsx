import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from '../hooks/useAuthContext'

function App() {

  const {user} = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/'/>} />
      </Routes>
    </>
  )
}

export default App
