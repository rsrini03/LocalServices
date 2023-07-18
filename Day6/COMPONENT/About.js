import React from 'react'
import AboutHero from './about_hero'
import '../Styles/about.css'
const About = () => {
  return (
    <div>
      <AboutHero />
      <div className='main'>
      <div className='about'>
        <div style={{marginBottom:"25px"}}>
        <img src="/images/accessibility.png" alt='' height="280px" width="280px"/>

          <h1> ACCESSIBILITY</h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
            We prioritize convenience and ease of access in every aspect
            of our service offerings. From the moment you reach out to us,
            we make sure that our communication channels are open and accessible.
            Whether it's through phone, email, or our user-friendly online platform,
            we provide multiple avenues for you to connect with us, ensuring that you
            can reach us in a way that is most convenient for you.
          </p>
        </div>
        <div>
        <img src="/images/trustworthiness.png" alt='' height="300px" width="300px"/>
          <h1>TRUSTWORTHINESS</h1>

          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
            We strive to earn your trust from the moment you first
            engage with us. Our team is comprised of highly skilled and
            thoroughly vetted professionals who have undergone rigorous background
            checks and reference verifications. We handpick individuals who not only
            possess exceptional expertise but also demonstrate the utmost integrity and
            professionalism.
          </p>
        </div>
      </div>
      <div className='about1'>
        <div style={{marginBottom:"30px"}}>
        
          <h1>QUALITY WORK </h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
            Quality is the foundation of our operations. We meticulously
            select and partner with the most skilled professionals in the
            community who possess a wealth of experience and expertise in
            their respective fields. We prioritize stringent vetting processes
            to ensure that only the most qualified and reliable individuals join our team.
          </p>
          <img src="/images/quality.png" alt=''height="300px" width="300px"/>
        </div>
        <div>
          <h1>LOCAL EXPERTISE </h1>
          <p style={{textAlign:"justify",marginTop:"20px",fontSize:"20px"}}>
            Our team consists of local professionals who have spent years honing
            their skills and gaining firsthand experience in our area. They are intimately
            familiar with the local landscape, regulations, and challenges that may arise.
            This expertise allows us to navigate any situation with ease and efficiency,
            providing our customers with tailored solutions that perfectly align with the local context.
          </p>
          <img src="/images/local-expertise.png" alt='' height="300px" width="300px"/>

        </div>
      </div>
      </div>
    </div>
  )
}

export default About
