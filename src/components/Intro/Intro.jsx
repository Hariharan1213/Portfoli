import React from 'react';
import './intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
            <span>Hi! I Am</span>
            <span>Hariharan</span>
            <span>Frontend Developer with medium level of
                experience in web designing and development,
                producing the Quality works.
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className='i-icons'>
            <a href="https://github.com/Hariharan1213/Crypton.git"><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/hariharan-s12/"><img src={LinkedIn} alt="" /></a>
            <a href=" https://www.instagram.com/invites/contact/?i=1679x8bz316g4&utm_content=3yes753"><img src={Instagram} alt=""/></a>
        </div> 
      </div>
      <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img 
        initial={{ left: "-36%" }}
        whileInView={{ left: "-24%" }}
        transition={transition}
        src={glassesimoji} alt="" />
        <motion.div initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div">
          <FloatinDiv image={crown} text1='Web' text2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{ left: "9rem", top: "18rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition}
        className="floating-div">
          <FloatinDiv image={thumbup} text1='Best Design' text2='Award'/>
        </motion.div>    
        {/*blur div*/}
        <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
        <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
