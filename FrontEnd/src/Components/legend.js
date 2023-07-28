import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Components/Footer'
import "../Styles/legend.css";


const Legend = () => {
    const [isOpen, setOpen] = useState(false);

    const { userDetails } = useSelector((state) => state.master);

    useEffect(() => {
        AOS.init();
    }, []);

    console.log(userDetails);

    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >

            <div className="profile-root">
                <div style={{ display: "flex", margin: "0 auto" }}>
                    <div
                        style={{ display: "flex", justifyContent: "center", width: "50%" }}
                    >
                        <motion.div
                            layout
                            transition={{ layout: { duration: 1 }, type: "spring" }}
                            className="card"
                            onClick={() => setOpen(!isOpen)}
                        >
                            <Paper elevation={16}>
                                <motion.h1 layout="position" id="profile-head">
                                    <FaCircleUser size={40} />
                                </motion.h1>

                                {isOpen && (
                                    <motion.div>
                                        <div className="profile-card-content">
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gridGap: "20px",
                                                    margin: "20px",
                                                }}
                                            >
                                                <div>
                                                    <h2 className="profile-field">First Name</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.firstName}</h2>
                                                </div>
                                                <div>
                                                    <h2 className="profile-field">Last Name</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.lastName}</h2>
                                                </div>
                                                <div>
                                                    <h2 className="profile-field">Username</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.username}</h2>
                                                </div>
                                                <div>
                                                    <h2 className="profile-field">Date Of Birth</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.dob}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>Email ID</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.email}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>Phone Number</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.phoneNumber}</h2>
                                                </div>
                                                <div className="profile-field">
                                                    <h2>location</h2>
                                                </div>
                                                <div className="profile-value">
                                                    <h2>{userDetails.location}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </Paper>
                        </motion.div>

                    </div>
                    <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
                        <div data-aos="zoom-in-up" data-aos-duration="3000">
                            <h1 style={{ color: "white", fontSize: "60px", textAlign: "center", marginTop: "30px" }}>
                                Get a closer look at your profile
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </motion.div>
    );
};

export default Legend;