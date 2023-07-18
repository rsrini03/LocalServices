import React from 'react'
import Customerbottom from './customerbottom'
import '../Styles/customersupport.css';
const Customer_support = () => {
    return (
        <div>
            <div>
                <div id='head-trans'>
                    <h1 style={{ textAlign: "center", marginTop: "50px", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "50px" }}>We are overwhelmed by what they have to say about us</h1>
                    <p style={{ marginTop: "50px", marginBottom: "60px", textAlign: "justify", marginLeft: "50px", marginRight: "50px",color:"darkgray" }}><i>**Customer satisfaction is at the heart of our service philosophy. We actively listen to our customers' needs and preferences, providing personalized solutions tailored to their unique requirements. Our friendly and professional team goes above and beyond to ensure clear communication, transparency, and responsiveness throughout the entire service experience.</i></p>
                </div>
            </div>


            <div style={{ minHeight: "80vh", backgroundAttachment: "fixed" }}>
                <Customerbottom />
            </div>
            
            <div className='clr'>
                <div className='cus' >
                    <h1 style={{ textAlign: "center", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "45px", marginTop: "50px" }} >Customer satisfaction is our top priority!!!</h1>
                    <p style={{ color: "darkorange", fontSize: "30px", textAlign: "center", marginTop: "35px" }}>We Listen !! We Care !! We Deliver !!</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div id="img-padding" style={{ width: "40%" }}>
                            <img src='/images/message.png' width="60%" style={{ margin: "20%" }} />
                            <h3 style={{ display: "block" ,marginLeft:"15%"}}>Integrated live chat!</h3>
                        </div>
                        <div id="img-padding" style={{ width: "40%" }}>
                            <img src='/images/mail.png' width="60%" style={{ margin: "20%" }} />
                            <h3 style={{ display: "block",marginLeft:"20%" }}>Email us!</h3>
                        </div>
                        <div id="img-padding" style={{ width: "40%" }}>
                            <img src='/images/customer-service.png' width="60%" style={{ margin: "20%" }} />
                            <h3 style={{ display: "block",marginLeft:"20%" }}>Built-in phone       support!</h3>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Customer_support
