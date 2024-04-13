import React, { useRef } from 'react'
import '../Loginpage/Loginpage.css'
import { Client,Databases, ID} from 'appwrite';
import { Editor } from '@tinymce/tinymce-react';

function Blogpost() {

  // const client = new Client();
  // const databases = new Databases(client);
  
  // client
  //     .setEndpoint('https://cloud.appwrite.io/v1')
  //     .setProject('');

  //     const promise = databases.createDocument(
  //       '',
  //       '',
  //       ID.unique(),
  //       { "postbody": "<p>My second js blog</p>" }
  //   );
    
  //   promise.then(function (response) {
  //       console.log(response);
  //   }, function (error) {
  //       console.log(error);
  //   });   
  
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  

  return (
    <div className='blogContentContainer' 
    style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem'}}>
        <input className='mainHeader' placeholder='Enter the main header'
        style={{height:'2rem'}}></input>
        <input className='subHeader' placeholder='Enter the sub-header'
        style={{height:'2rem'}}></input>
        <Editor
        apiKey='ccnwrn9rut4ofc9egcecui85abdx29ai9tx7bn8lt53e5nia'
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
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  )
}

export default Blogpost