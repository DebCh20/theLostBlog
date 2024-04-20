import React, { useRef, useState, useEffect } from 'react'
import '../Loginpage/Loginpage.css'
import { Client,Databases, ID} from 'appwrite';
import { Editor } from '@tinymce/tinymce-react';

function Blogpost() {

  let editorRef = useRef(null);
  
  const client = new Client();
  const databases = new Databases(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);      
  
  const log = () => { 
   if(editorRef.current.getContent()){
     const promise = databases.createDocument(
       process.env.REACT_APP_APPWRITE_DATABASE_ID,
       process.env.REACT_APP_APPWRITE_COLLECTION_ID,
       ID.unique(),
       { 
        'title':'demo blog',
        "blogbody":editorRef.current.getContent()}
     );
   
   promise.then(function (response) {
       console.log(response);
   }, function (error) {
       console.log(error);
   }); 
  }
  };
  

  return (
    <div className='blogContentContainer' 
    style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem'}}>
        {/* <input className='mainHeader' placeholder='Enter the title'
        style={{height:'2rem'}}></input> */}
        {/* <input className='subHeader' placeholder='Enter the sub-header'
        style={{height:'2rem'}}></input> */}
        <Editor
        apiKey= {process.env.REACT_APP_TINYMCE_APIKEY}
        onInit={(evt, editor) => editorRef.current = editor}        
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +'code |'+ 'image|'+
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  )
}

export default Blogpost