import * as React from 'react';
import { Paper } from '@mui/material';
import { useState, setRole } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import { useEffect } from 'react';

export default function Payment() {

    const [payment, setPayment] = useState("pay");

    const onOptionChange = (e) => {
        setRole(e.target.value);
    };

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div style={{ display: "flex", flexDirection: "row-reverse", width: "100%", minHeight: "100vh" }} data-aos="zoom-in" data-aos-duration="2000"  >
                <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
                    <img src='/images/Confirmation.png' alt='img' style={{ width: "80%" }} />
                </div>

                <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
                    <div style={{ marginTop: "0px" }}>
                        <h1 style={{ textAlign: "center", fontFamily: "'Titillium Web', sans-serif" }}>Make Payment</h1>
                        <div style={{ display: "flex", flexDirection: "row" }} >
                            <div style={{ display: "flex", justifyContent: "center", justifyContent: "space-around" }}>
                                <img src='/images/paytm.png' alt='img' width="20%" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", justifyContent: "space-around" }}>
                                <img src='/images/google-pay.png' slot='img' width="20%" />
                            </div>
                        </div>
                        <div>
                        <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            padding: "30px"
                          },
                        }}
                      >
                        <Paper elevation={20}>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <h2 style={{ fontFamily: "'Titillium Web', sans-serif", textAlign: "center" }}>Price Details</h2><br />
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "35px" }}>
                              <div>
                                <p>Price</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p>₹2000</p>
                              </div>
                              <div>
                                <p style={{ color: "green" }}>Discount</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p style={{ color: "red" }}>-₹200</p>
                              </div>
                              <div>
                                <p>Total Amount</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p>₹1800 </p>
                              </div>
                              <div>
                                <p style={{ color: "green" }}>Total Savings</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p style={{ color: "green" }}>₹200</p>
                              </div>
                            </div>
                          </div>
                        </Paper>
          
                      </Box>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button style={{
                                marginTop: "10px",
                                width: "50%",
                                marginBottom: "10px",
                                backgroundColor: "gray",
                                color: "black",
                                borderRadius: "0px",
                                marginTop: "40px",
                                justifyContent: "center"
                            }}>PayNow</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}