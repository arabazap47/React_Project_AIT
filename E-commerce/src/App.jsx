import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import Routing from './Components/Routing/Routing'


function App() {

  return (
    <>
      <NavBar />
      <Routing />
    </>
  )
}

export default App
