import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import Routing from './Components/Routing/Routing'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <NavBar />
      <Routing />
      <Footer />
    </>
  )
}

export default App
