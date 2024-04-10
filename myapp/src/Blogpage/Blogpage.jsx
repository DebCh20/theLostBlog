import React from 'react';
import './Blogpage.css';

function Blogpage() {
  return (
    <>
    <div className='blogcarouselContainer' style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'3rem',
  justifyContent:'center', alignItems:'center'}}>
    <div className='sitecoreBlog' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <img className='blogImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm1qxlavjiFnbqEw0JSQEEjPFZsi9AsCOSU66J-0t_w&s'/>
      <span style={{color:'white'}}>Read the sitecore blog</span>
      </div>
    <div className='sitecoreBlog' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <img className='blogImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm1qxlavjiFnbqEw0JSQEEjPFZsi9AsCOSU66J-0t_w&s'/>
      <span style={{color:'white'}}>Read the sitecore blog</span>
      </div>    
    </div>
    <br/>
    <br/>
    </>
  )
}

export default Blogpage