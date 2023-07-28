import React from 'react'
import Customerbottom from './customerbottom'
import '../Styles/customersupport.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer'
const Customer_support = () => {
    useEffect(() => {
        window.scrollTo(
          {
            top: 0,
            behavior: "smooth"
          }
        )
      })

    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
        >
            <div>
                <div style={{ minHeight: "100vh", backgroundAttachment: "fixed" }}>
                    <Customerbottom />
                </div>

                <div className='clr'>
                    <div className='cus' >
                        <h1 style={{ textAlign: "center", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "45px", marginTop: "50px" }} >Customer satisfaction is our top priority!!!</h1>
                        <p style={{ color: "darkorange", fontSize: "30px", textAlign: "center", marginTop: "35px" }}>We Listen !! We Care !! We Deliver !!</p>
                        <div className="trans" style={{ display: "flex" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div id="img-padding" style={{ width: "40%" }}>
                                    <img src='/images/message.png' width="90%" style={{ margin: "20%" }} />
                                    <h2 style={{ display: "block", marginLeft: "20%" }}>Integrated live chat!</h2>
                                </div>
                                <div id="img-padding" style={{ width: "40%" }}>
                                    <img src='/images/mail.png' width="90%" style={{ margin: "20%" }} />
                                    <h2 style={{ display: "block", marginLeft: "20%" }}>Email us!</h2>
                                </div>
                                <div id="img-padding" style={{ width: "40%" }}>
                                    <img src='/images/customer-service.png' width="90%" style={{ margin: "20%" }} />
                                    <h2 style={{ display: "block", marginLeft: "20%" }}>Built-in phone support!</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Customer_support
