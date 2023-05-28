import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Cards from '../Card/Cards'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion'


function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='Services' id='Services'>
        <div className='awesome'>
            <span style={{color: darkMode?'white': ''}}> My Awesome</span>
            <span>Services</span>
            <span> I am a Mern Stack Web Developer . 
                <br/>
                I can create a complete website using React.js , Node.js ,Express.js
and MongoDb   </span>
              <button className='button s-button'> Download CV</button>
              <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className='card' >
            < motion.div
            className='card1'
                  initial={{ left: "25rem" }}
                  whileInView={{ left: "14rem" }}
                  transition={transition}
            style={{left:'14rem'}}>
            <Cards
               emoji={HeartEmoji}
               heading={"React Developer"}
               details={ 'I will make Websites using React and TailWind Css.I am energetic to explore or learn new things '}
          />   
            </motion.div>
         
            < motion.div
                     initial={{ left: "-11rem", top: "12rem" }}
                     whileInView={{ left: "-4rem" }}
                     transition={transition}
            style={{top:'12rem' , left:'-4rem'}}>
                <Cards
                emoji={Glasses}
                heading={"Frontend Developer"}
                details={ '  I will make Frontend of your Website using Html, CSS, JS , Bootstrap & Tailwind Css . '}
                />
            </motion.div>

            < motion.div 
                   initial={{ top: "19rem", left: "25rem" }}
                   whileInView={{ left: "12rem" }}
                   transition={transition}
            style={{top:'19rem' , left:'12rem'}}>
                <Cards className="card3"
                emoji={Humble}
                heading={"Mern Stack Developer"}
                details={ ' I will make a Frontend with React and Backend with Node.Js , Express.Js & MongoDb'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        
        </div>
    </div>
  )
}

export default Services