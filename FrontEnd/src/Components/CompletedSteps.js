import React from 'react'
import { motion } from 'framer-motion'
const CompletedSteps = () => {
  return (
    <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
        >
    <div style={{ display: "flex", flexDirection: "row-reverse", width: "100%", minHeight: "100vh" }}  data-aos="zoom-in" data-aos-duration="2000">
      <div style={{ width: "50%", display: "grid",placeItems:"center"  }}>
        <img src='/images/Completed.png' alt='img' style={{ width: "80%" }} />
      </div>

      <div style={{ width: "50%", display: "grid",placeItems:"center" }}>
        <div style={{ marginTop: "0px" }}>
          <h1 style={{ textAlign: "center" }}>Your Order Booked Successfully :)</h1>
          <br/>
          <h2 style={{ textAlign: "center" }}> Enjoy Our Service!!</h2>

        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default CompletedSteps