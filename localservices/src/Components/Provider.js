import React from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

import {
  FaClock,
  FaLocationDot,
  FaPhone,
  FaCrown,
  FaCircleInfo,
  
} from "react-icons/fa6";
import "../Styles/provider.css";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import providerService from "../Services/providerService";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoMdPricetags } from "react-icons/io";


const ProviderInfo = () => {

  useEffect(() => {
    fetchData();
  }, [])

  const { providerEmail } = useSelector((state) => state.master);
  const { Token } = useSelector((state) => state.master);

  const [details, setDetails] = useState([]);

  const fetchData = async () => {
    try {

      const response = await providerService.getProviderByEmail(providerEmail, Token);
      setDetails(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opasity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="provider-contain">
        <h1 style={{ marginTop: "30px", textAlign: "center", fontFamily: "'Titillium Web', sans-serif"}}>Provider Information</h1>
        <div className="provider-info-root">
          <div className="provider-left">
            <img src="/images/provider-profile.png" width="100%" />
          </div>
          <div className="provider-right" >
            <div style={{marginLeft:"100px"}}>
              <h1
                style={{ fontSize: "60px", margin: "0px", textAlign: "start" }}
              >
                {details.firstName}
              </h1>
              <div
                className="provider-desc"
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <FaCircleInfo
                  style={{ marginTop: "5px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.serviceProviding}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaLocationDot
                  style={{ marginTop: "5px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.location}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaPhone
                  style={{ marginTop: "5px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  +91 {details.phoneNumber}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaClock
                  style={{ marginTop: "0px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.workingHours}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <IoMdPricetags
                  style={{ marginTop: "0px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                ₹{details.price}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaCrown
                  style={{ marginTop: "0px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.experience} years of Experience
                </h4>
              </div>
              <Rating name="read-only" value={3} readOnly />
              <div style={{ display: "flex" }}>
                <Button
                  variant="contained"

                  style={{ marginRight: "20px", marginTop: "20px" ,backgroundColor:"gray",color:"black"}}
                  onClick={()=>navigate("/stepper")}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProviderInfo;