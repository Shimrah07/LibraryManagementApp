import React from 'react'
import Navbar from './components/features/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}  />
      <Route path='/login' element= {<Login/>}  />
      <Route path='/register' element= {<Register/>}  />
    </Routes>
    </>
  )
}

export default App
