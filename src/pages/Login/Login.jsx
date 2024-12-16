import React, { useState } from 'react'
import'./Login.css'
import assets from '../../assets/assets'
const Login = () => {
  const [currState,setCurrState]=useState("SIGN UP");
  return (
    <div className='login'>
      <img src={assets.logo_big}alt=" " className="logo"/>
       <form  className='login-form'>
        <h2>{currState}</h2>
        {currState==="SIGN UP"?<input type="text"  placeholder="username" className="form-input" required />: null}
        <input type="email"  placeholder="Email-address" className="form-input" required />
        <input type="password" placeholder="password" className="form-input"  required/>
        <button type="submit">{currState=="SIGN UP"?"Create account":"Login now"}</button>
        <div className='login-term'>
        <input type="checkbox"/><p>I,Agree to the Terms Of Use & Privacy Policy.</p>

        </div>
        <div className='login-forgot'>
          {
            currState=="SIGN UP"?
          <p className='login-toggle'>Already Have an Account.<span onClick={()=>setCurrState("Login")}>Login here</span></p>:
          <p className='login-toggle'>Create an Account.<span onClick={()=>setCurrState("SIGN UP")}>Click here.</span></p>
            }
        </div>
       </form>
    </div>
  )
}

export default Login