import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Block from './pages/Block'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Account from './pages/Account/Account'
import Settings from './pages/Settings/Settings'
import Orders from './pages/Orders/Orders'
import Cart from './components/Cart'
import CartPage from './pages/CartPage'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/block" element={<Block />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
