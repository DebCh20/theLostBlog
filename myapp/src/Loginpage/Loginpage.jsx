import React from 'react';
import './Loginpage.css'


function Loginpage() {
  return (
    <div className='loginPageContainer'>
        {/* <label for='userid'>Userid</label> */}
        <input className='userid' placeholder='Enter the userId' type='text'></input>
        {/* <label for='password'>Password</label> */}
        <input className='password' placeholder='Enter the password' type='password'></input> 
        <button id='submitCreds'>Submit</button>       
    </div>
  )
}
export default Loginpage