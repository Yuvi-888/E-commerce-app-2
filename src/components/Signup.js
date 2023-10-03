import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Signup() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [type, settype]=useState()

  const navigate=useNavigate()

  function handle_signup(){
    const data={name:email, password:password, type:type}
    axios.post('http://localhost:3000/signup', data)
    .then((response)=>{
        console.log(response.data.token)

        if(response.status==200){
            navigate('/login')
        }
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <>
    <div className="signup_container">
      <h1 className="signup_heading">SIGNUP</h1>
      <input
      className="signup_inputs"
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
      className="signup_inputs"
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <input
      className="signup_inputs"
        type="text"
        placeholder="enter type"
        value={type}
        onChange={(e) => {
          settype(e.target.value);
        }}
      />
      <button className='signup_btn' onClick={handle_signup}>Submit</button>
      </div>
    </>
  );
}
