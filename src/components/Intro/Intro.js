import React from 'react'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import  './Intro.css'; 
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion, spring } from 'framer-motion'
import { Link } from 'react-scroll'
import ali from "../../img/my_iamge-removebg-preview.png"
function Intro() {  
  const transition = { duration:2 , type:spring};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color: darkMode?'white': ''}}>Hi! I Am</span>
                <span >Asad Ali Hanif</span> 
                <span>Full Stack Web Developer</span>
            </div>
            <Link spy={true} smooth={true} to="Contact">
            <button className=' button i-button'>
                Hire me
            </button>
            </Link>
            <div className='i-icons'>
              <img src={Github} alt=''/> 
              <img src={LinkedIn} alt=''/>
              <img src={Instagram} alt=''/>
            </div>
        </div>
        <div className='i-right'>
        <img src={Vector1} alt=''/>
        <img src={Vector2} alt=''/>
        <img src={boy } alt=''/>
        <motion.img
            initial={{left:"-36%"}}
            whileInView={{left:"-24%"}}
            transition={transition}
           src={glassesimoji} alt = "" />
        <motion.div 
               initial={{left:"74%" , top:"-4%"}}
               whileInView={{left:"68%"}}
               transition={transition}
        style={{top:'-4%' , left : '68%'}}>
        <FloatingDiv  
                
        
        image={ Crown} txt1="Web" txt2=" Developer"/>
         
        </motion.div>
       

        <motion.div 
                initial={{left:"9rem" , top:"18rem"}}
               whileInView={{left:"0rem"}}
               transition={transition}
        style={{top:'18rem' , left: '0rem'}}>
          <FloatingDiv image={thumbup} txt1="Mern " txt2="Stack Developer" />
        </motion.div>
        <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        <div className='blur' style={{
          background:"#C1F5FF",
          top:"17rem",
          width:"21rem",
          height:"11rem",
          left:"-9rem",
        }}></div>
        </div>
        
    </div>
  )
}

export default Intro