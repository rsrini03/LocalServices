import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
const Address = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
        >
    <div style={{ display: "flex", flexDirection: "row-reverse", width: "100%", minHeight: "100vh" }}  data-aos="zoom-in" data-aos-duration="2000">
      <div style={{ width: "50%", display: "grid",placeItems:"center"  }}>
        <img src='/images/address.png' alt='img' style={{ width: "80%" }} />
      </div>

      <div style={{ width: "50%", display: "grid",placeItems:"center" }}>
        <div style={{ marginTop: "0px" }}>
          <h1 style={{ textAlign: "center", fontFamily: "'Titillium Web', sans-serif" }}>YOUR ADDRESS</h1>
          <p style={{ textAlign: "center" }}>13/41,Sirumugai, Mettupalayam, Coimbatore</p>
          <div style={{textAlign:"center"}}>
            <button style={{
              marginTop: "10px",
              width: "80%",
              marginBottom: "10px",
              backgroundColor: "gray",
              color: "black",
              borderRadius: "0px",
              marginTop: "40px",
              justifyContent: "center"
            }}>CHANGE THE ADDRESS</button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Address