import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function GetEditProduct() {


  const params =useParams()
  const [image,setimage]=useState()
  const [name,setname]=useState()
  const [price,setprice]=useState()

  const navigate=useNavigate()

  useEffect(()=>{
    const id=params.id
    axios.get(`http://localhost:3000/get-product/${id}`)
    .then((res)=>{
      console.log(res)
      setimage(res.data.data.url)
      setname(res.data.data.name)
      setprice(res.data.data.price)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  function handle_submit(e){
  e.preventDefault()
    console.log({id:params.id,url:image,name,price})
    const data={id:params.id,url:image,name,price}
    axios.post('http://localhost:3000/edit-product', data)
    .then((response)=>{
      console.log(response.data)
      if(response.status==200){
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
