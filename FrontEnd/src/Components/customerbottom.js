import React from 'react'
import '../Styles/customerbottom.css';

const Customerbottom = () => {
  return (
    <div className='customer-bottom' >
      <div style={{display:"flex", justifyContent:"center"}}>
        <div id='head-trans1'>
          <h1 style={{ textAlign: "center", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "50px" }}>We are overwhelmed by what they have to say about us</h1>
          <p style={{ marginTop: "50px", textAlign: "justify", marginLeft: "50px", marginRight: "50px", color: "black" }}><i>**Customer satisfaction is at the heart of our service philosophy. We actively listen to our customers' needs and preferences, providing personalized solutions tailored to their unique requirements. Our friendly and professional team goes above and beyond to ensure clear communication, transparency, and responsiveness throughout the entire service experience.</i></p>
        </div>
      </div>

    </div>
  )
}

export default Customerbottom
