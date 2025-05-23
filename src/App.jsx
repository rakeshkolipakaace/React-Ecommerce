import React from 'react'

import Product from './components/Product'

import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ProductDetail from './components/ProductDetail';

import Cart from './components/Cart';

import SearchItems from './components/SearchItems';
const App = () => {
  return (
    <>
   <Router>
     <Navbar />

     <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/search/:term" element={<SearchItems />} />
      <Route path="/cart" element={<Cart />} />



     </Routes>
    <Product />
   </Router>
    </>
  )
}

export default App