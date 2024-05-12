import React, { useState } from "react";
import { toast } from "react-toastify";

const Login =()=>{
    // make a usestate for each input 

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    //Make a error state
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')

    //Make a function to handle the form submission
    const handleLogin =(e) =>{
        e.preventDefault()
        toast.success("Login button clicked!")
    }

   
    return (
        <div className="container">
            <h1>Login to your account</h1>

           <form className="w-50"> 
            <label>Email Address {email}</label>
            <input onChange={(e)=> setEmail(e.target.value) } type="text" className="form-control" placeholder="Enter Your email"/>

            <label>Password {password}</label>
            <input onChange={(e)=> setPassword(e.target.value) } type="password" className="form-control" placeholder="Enter Your password"/>

            <button onClick={handleLogin} className="btn btn-danger mt-2 w-100" >Login</button>
           </form>          
        </div>
    )
}

export default Login;