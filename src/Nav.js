import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, handleshow] = useState(false)
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            handleshow(true)
        }else handleshow(false)
       });

    //    return ()=>{
    //     window.removeEventListener('scroll')
    //    }
    },[])

  return (
    <>
    <div  className={show? 'Nav': 'Nav_Black'}>

     <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
     className='Nav_Logo'
     alt='Netflix_Logo'
     />

    <img 
     className='Nav_Avatar'
     src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
     alt='Netflix_Avatar'
     />
    </div>
    </>
  )
}

export default Nav