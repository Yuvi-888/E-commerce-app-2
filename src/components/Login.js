import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const navigate=useNavigate()

  function handle_login(){
    const data={name:email, password:password}
    axios.post('http://localhost:3000/login', data)
    .then((response)=>{
        console.log(response.data.token)

        if(response.data.token){
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
            navigate('/home')
        }
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <>
    <div className="login_container">
      <h1 className="login_heading">LOGIN</h1>
      <input
      className="login_inputs"
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
      className="login_inputs"
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button className='login_btn' onClick={handle_login}>Submit</button>
      </div>
    </>
  );
}
