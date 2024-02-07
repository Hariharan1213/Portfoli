import React from 'react';
import './services.css'
import Heartemoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card';
import Resume from './Hariharan S RESUME.pdf'
import { motion } from "framer-motion";

const Services = () => {
    const transition = {duration: 1,type: "spring",};
  return (
    <div className='services' id='Services'>
        {/*left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>services</span>
            <span>A well-designed website is a powerful marketing and communication 
                <br />tool that helps build trust and generate leads.</span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>     
        </div>
        {/*right side */}
        <div className='cards'>
            <motion.div
                initial={{ left: "20rem" }}
                whileInView={{ left: "30rem" }}
                transition={transition}>
                <Card 
                emoji={Heartemoji}
                heading={'Design'}
                detail={'Adobe,Photoshop,sketch'}
                />
            </motion.div>
            <motion.div 
                initial={{ left: "2rem", top: "12rem" }}
                whileInView={{ left: "8rem" }}
                transition={transition}>
                <Card 
                emoji={Glasses}
                heading={'Developer'}
                detail={'HTML,CSS,Javascript,React'}
                />
            </motion.div>
            <motion.div 
                initial={{ top: "19rem", left: "20rem" }}
                whileInView={{ left: "25rem" }}
                transition={transition}>
                <Card 
                emoji={Humble}
                heading={'UI/UX'}
                detail={'UI -interactivity of a web page, UX -experience with the website'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services
