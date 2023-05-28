// import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'> Asad Ali</div>
                <Toogle />

            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} smooth={true} to="Navbar">  <li>Home </li></Link>

                        <Link  spy={true} smooth={true} to="Services"><li>Services</li></Link>
                        <Link spy={true} smooth={true} to="Skills" ><li>Skills </li></Link>
                        <Link spy={true} smooth={true} to="Portfolio" > <li>Portfolio </li></Link>




                    </ul>
                </div>
                <Link spy={true} smooth={true} to="Contact">
                <button className='button n-button'> Contact  </button>
                          
                 </Link>


            </div>

        </div>
    )
}

export default Navbar