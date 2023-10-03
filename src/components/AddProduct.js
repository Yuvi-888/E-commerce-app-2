import axios from 'axios'
import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

  const navigate=useNavigate()

  const [image,setimage]=useState()
  const [name,setname]=useState()
  const [price,setprice]=useState()

  function handle_submit(e){
    e.preventDefault()
    console.log({image,name,price})
    const data={url:image, name:name, price:price}
    axios.post('http://localhost:3000/add-product', data)
    .then((respone)=>{
      console.log(respone)
      if(respone.data=='saved'){
          navigate('/get/product')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
   <>
   <div className="form_container">
   <form  onSubmit={handle_submit}>
    <input className='inputs' type="text" placeholder='Image' value={image} onChange={(e)=>setimage(e.target.value)}/><br/>
    <input className='inputs' type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/><br/>
    <input className='inputs' type="number" placeholder='Price' value={price} onChange={(e)=>setprice(e.target.value)}/><br/>
    <button className='submit_btn' type='submit'>Submit</button><br/>
   </form>
   </div>
   </>
  )
}
