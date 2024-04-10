import React from 'react'
import '../Loginpage/Loginpage.css'

function Blogpost() {
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