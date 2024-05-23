import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage'
import ShopPage from '../ShopPage'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />
    </Routes>
  )
}

export default Routing