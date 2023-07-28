import React from 'react'
import Typewriter from 'typewriter-effect';
import '../Styles/hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
        initial={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:1}}
    >
        <div className='hero'>
            <div className='hero-container'>
                <div style={{paddingTop:"150px",marginLeft:"100px"}}>
                    <h1 id="hero-text" style={{fontFamily:"'Titillium Web', sans-serif",color:"white",marginBottom:"60px"}}> <Typewriter
                        options={{
                            strings: ['Online Marketplace For Local Service','Trustworthiness','Quality','Accessibility','Local Expertise'],
                            autoStart: true,
                            loop: true,
                            delay:50
                        }}
                    /></h1>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Hero
