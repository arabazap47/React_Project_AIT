import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>hello</h2>
      <HomePage />
    </>
  )
}

export default App
