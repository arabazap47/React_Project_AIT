import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import Routing from './Components/Routing/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routing />
    </>
  )
}

export default App
