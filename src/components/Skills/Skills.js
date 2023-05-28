import React from 'react'
import './Skills.css'
import { themeContext } from '../../Context';
import { useContext } from "react";
function Skills() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <>
    <div className='Skills' id='Skills'>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>90%</div>
            <span style={{color: darkMode?'white': ''}}> HTML</span>
            {/* <span> I am expert in  </span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>50%</div>
            <span style={{color: darkMode?'white': ''}}>CSS</span>
            {/* <span>I have a  good Grip </span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>50%</div>
            <span style={{color: darkMode?'white': ''}}> TAILWIND CSS</span>
            {/* <span>I have a good Grip</span> */}
        </div>
        <div className='achievement'>
            <div className='circle'style={{color: darkMode?'var(--orange)':''}}>90%</div>
            <span style={{color: darkMode?'white': ''}}> BOOTSTRAP</span>
            {/* <span> I am expert in</span> */}
        </div>
        <div className='achievement'>
            <div className='circle'style={{color: darkMode?'var(--orange)':''}}>40%</div>
            <span style={{color: darkMode?'white': ''}}>JAVASCRIPT</span>
            {/* <span>I have a good practise</span> */}
        </div>
     
        
    </div>
    <div className='Skills2'>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>40%</div>
            <span style={{color: darkMode?'white': ''}}>REACT JS</span>
            {/* <span>I have a good practise</span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>50%</div>
            <span style={{color: darkMode?'white': ''}}>NODE JS</span>
            {/* <span>I have a good practise </span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>50%</div>
            <span style={{color: darkMode?'white': ''}}> EXPRESS JS</span>
            {/* <span>I have a good practise</span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>50%</div>
            <span style={{color: darkMode?'white': ''}}> MONGODB</span>
            {/* <span> I know how to connect</span> */}
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>90%</div>
            <span style={{color: darkMode?'white': ''}}> C & C++</span>
            {/* <span>I have a good Grip</span> */}
        </div>
     
        
    </div>  
       </>      
  )
}

export default Skills