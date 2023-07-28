import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AOS from 'aos';
import "aos/dist/aos.css";
const OrderSummary = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <motion.div
      initial={{ opasity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%", minHeight: "100vh" }} data-aos="zoom-in" data-aos-duration="2000">
        <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
          <Card sx={{ maxWidth: "80vh", marginRight: "30px" }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/images/cleaning.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  House Cleaning
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                  Our services encompass a wide range of cleaning tasks, including dusting, vacuuming, mopping, disinfecting, bathroom and kitchen cleaning, window cleaning, upholstery cleaning, and much more.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
          <div >
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
        </div>
      </div>
    </motion.div>
  )
}

export default OrderSummary