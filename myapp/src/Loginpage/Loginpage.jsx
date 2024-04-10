import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

function Loginpage() {
  const navigate = useNavigate();

  let [validating, setValidating] = useState(false);

  const handleSubmit = () => {
    let val=true;
    setValidating(true);
    setTimeout(() => {
      if(val)
      navigate('/blogpost');
    }, 3000);    
  };

  return (
    <>
    {!validating && (
    <div className='loginPageContainer'>      
      <input className='userid' placeholder='Enter the userId' type='text'></input>
      <input className='password' placeholder='Enter the password' type='password'></input> 
      <button id='submitCreds' onClick={handleSubmit}>Submit</button>        
    </div>
    )}
    {validating && 
      <h3 style={{marginTop:'50%', marginLeft:'45%', color:'white', height:'2rem', width:'5rem'}}>Validating credentials !!!</h3>}    
    </>
  );
}

export default Loginpage;
