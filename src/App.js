import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddProduct from './components/AddProduct'
import GetProduct from './components/GetProduct'
import GetEditProduct from './components/GetEditProduct'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/add/product' element={<AddProduct/>}/>
      <Route path='/get/product' element={<GetProduct/>}/>
      <Route path='/get/product/:id' element={<GetEditProduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
