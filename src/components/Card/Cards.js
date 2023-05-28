import React from 'react'
import './Cards.css'

function Cards( { emoji , heading , details}) {
  return (
    <div className='cards'>
        <img  src={emoji}  alt=''/>
        <span style={{marginTop:"-1rem"}}>{heading}</span>
        <span style={{marginTop:"-0.5rem"}}>{details}</span>
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Cards