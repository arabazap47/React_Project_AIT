import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage'
import ShopPage from '../ShopPage'
import ProductInfo from '../ProductInfo'
import CartPage from '../CartPage'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/cartpage" element={<CartPage />} />
    </Routes>
  )
}

export default Routing