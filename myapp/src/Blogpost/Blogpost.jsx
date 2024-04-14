import React, { useRef, useState, useEffect } from 'react'
import '../Loginpage/Loginpage.css'
import { Client,Databases, ID} from 'appwrite';
import { Editor } from '@tinymce/tinymce-react';

function Blogpost() {

   let [editorContent, setEditorContent] = useState('');   
  
  
  const client = new Client();
  const databases = new Databases(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

      useEffect(() => {
        
      }, [editorContent, editorRef.current.getContent()])       
  
  const editorRef = useRef(null);
  const log = () => {
    const promise = databases.createDocument(
      process.env.REACT_APP_APPWRITE_DATABASE_ID,
      process.env.REACT_APP_APPWRITE_COLLECTION_ID,
      ID.unique(),
      { "postbody":editorContent}
    );
  
  promise.then(function (response) {
      console.log(response);
  }, function (error) {
      console.log(error);
  });  
    if (editorRef.current) {
      setEditorContent(editorRef.current.getContent());
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