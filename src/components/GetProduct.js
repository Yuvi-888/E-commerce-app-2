import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function GetProduct() {

  const [data, setdata]=useState([])
  const [deletedata,setdeletedata]=useState([])
  const [refresh, setrefresh]=useState(false)

  const navigate=useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3000/get-product')
    .then((response)=>{
      setdata(response.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [refresh])


  function handle_delete(){
    const data=deletedata
    axios.post('http://localhost:3000/delete-product', data)
    .then((response)=>{
      console.log(response)
      if(response.status==200){
        setrefresh(!refresh)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  function handle_addtocart(productid){
    const _productid=productid
    const userId=localStorage.getItem('userId')

    console.log({productid:_productid, userId:userId})

    const data={productid:_productid, userId:userId}
    axios.post('http://localhost:3000/add-to-cart', data)
    .then((response)=>{
      console.log(response)
      if(response.status==200){
        setrefresh(!refresh)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
  <>
  {deletedata.length > 0 && <button className='delete_btn' onClick={handle_delete}>Delete Selected</button>}
  
  {
    data.map((item,index)=>{
      return (
        <>
        <div className="product_container">
                <div className="product_card">
              <img className="product_img" src={item.url} />
              <h2 className="product_name">{item.name}</h2>
              <h2 className="product_price">Rs. {item.price}</h2>
              <button className='edit_btn' onClick={()=>{
                navigate(`/get/product/${item._id}`)
              }}>Edit</button>
              <input type="checkbox" className='checkbox'  onChange={(e)=>{console.log(e.target.checked)
              if(e.target.checked){
                  setdeletedata([...deletedata, item._id])
                }
                else{
                  setdeletedata(deletedata.filter(del=>del!==item._id))
                }
              }}/>
              <button className='addtocart_btn' onClick={()=>handle_addtocart(item._id)}>Add to cart</button>
              </div>
            </div>
        </>
      )
    })
  }
  </>
  )
}
