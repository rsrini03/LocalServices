import React from 'react'
import Typewriter from 'typewriter-effect';
import '../Styles/hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div style={{paddingTop:"250px"}}>
                    <h1 id="hero-text" style={{fontFamily:"'Titillium Web', sans-serif"}}> <Typewriter
                        options={{
                            strings: ['Trustworthiness','Quality','Accessibility','Local Expertise'],
                            autoStart: true,
                            loop: true,
                            delay:50
                        }}
                    /></h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
