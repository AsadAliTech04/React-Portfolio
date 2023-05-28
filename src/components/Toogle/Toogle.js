import React from 'react'
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

import { themeContext } from '../../Context'
import { useContext } from "react";


function Toogle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const handleClick = () =>{  
          theme.dispatch({type:'toggle'});
  } 
  return (
    <div className='toogle' onClick={handleClick} >
         <Sun/>
         <Moon/>
         <div className='t-button'  style={darkMode?{right:"2px"} : {left:"2px"}}>
           
            
         </div>
    </div>
  )
}

export default Toogle