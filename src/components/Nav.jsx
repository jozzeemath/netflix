import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {
  const [show,setShow]= useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scroll>'600px')
          {
            setShow(true)
          }
            else{
              setShow(false)
            }
        })
    

    })
  return (
    <div className={`nav ${show && 'nav-bg'} logo`}>
        <img  width={'150px'}src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="netflixlogo" />
    </div>
  )


}

export default Nav