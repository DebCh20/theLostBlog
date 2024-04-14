import React, { useState, useRef } from 'react';
import { Client, Account } from "appwrite";
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

function Loginpage() {
  const navigate = useNavigate();

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);     
    const userID = useRef(null);
    const password = useRef(null);

  let [validating, setValidating] = useState(false);
  let [validatingMsg, setValidatingMsg] = useState('Validating credentials !!!');

  const handleSubmit = () => {
    let val=true;
    setValidating(true);
    const account = new Account(client);
    console.log(userID.current.value, password.current.value);
    const promise = account.createEmailPasswordSession(userID.current.value, password.current.value);

    promise.then(function (response) {
        console.log(response); // Success
        navigate("/blogpost")
    }, function (error) {
        console.log(error); // Failure
        setValidatingMsg('Credentials do not match :( ')
        setTimeout(() => {
          setValidating(false);
        }, 3000);
    });
      
  };

  return (
    <>
    {!validating && (
    <div className='loginPageContainer'>      
      <input className='userid' placeholder='Enter the userId' ref={userID} type='text'></input>
      <input className='password' placeholder='Enter the password' ref={password} type='password'></input> 
      <button id='submitCreds' onClick={handleSubmit}>Submit</button>        
    </div>
    )}
    {validating && 
      <h3 style={{marginLeft:'45%', color:'white', height:'2rem', width:'10rem'}}>{validatingMsg}</h3>}    
    </>
  );
}

export default Loginpage;
