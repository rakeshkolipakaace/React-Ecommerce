import React, { useState } from 'react'

import Product from './components/Product'

import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ProductDetail from './components/ProductDetail';

import Cart from './components/Cart';

import SearchItems from './components/SearchItems';

import {items} from './components/Data';
const App = () => {

  const[data,setData]=useState([...items])
  return (
    <>
   <Router>
     <Navbar />

     <Routes>
      <Route path="/" element={<Product items={data} />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/search/:term" element={<SearchItems />} />
      <Route path="/cart" element={<Cart />} />



     </Routes>
   </Router>
    </>
  )
}

export default App