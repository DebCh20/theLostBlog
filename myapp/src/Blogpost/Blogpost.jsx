import React from 'react'
import '../Loginpage/Loginpage.css'
import { Client,Databases, ID} from 'appwrite';

function Blogpost() {

  const client = new Client();
  const databases = new Databases(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('');

      const promise = databases.createDocument(
        '',
        '',
        ID.unique(),
        { "postbody": "<p>My second js blog</p>" }
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });    

  return (
    <div className='blogContentContainer' 
    style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem'}}>
        <input className='mainHeader' placeholder='Enter the main header'
        style={{height:'2rem'}}></input>
        <input className='subHeader' placeholder='Enter the sub-header'
        style={{height:'2rem'}}></input>
        <input className='content' placeholder='Enter the blog content'
        style={{height:'20rem', paddingTop: '0',
        paddingLeft: '0', lineHeight: '1em'}}></input>
        <button className='submitContent' style={{marginLeft:'45%'}}>Submit</button>
    </div>
  )
}

export default Blogpost