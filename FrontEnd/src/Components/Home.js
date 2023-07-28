import React from "react";
import Hero from "./Hero";
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import '../Styles/homepage.css';
import Footer from "./Footer";
import UserService from '../Services/userService'
import { addUserDetails,addRole } from '../Components/Stores/MasterSlice';
import { motion } from "framer-motion";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const { Token } = useSelector((state) => state.master);
    const { color } = randomColor();
    const { role } = useSelector(state => state.master);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await UserService.getUserByEmail(Emails, Token);
            console.log("response", " ", response.data);
            dispatch(addUserDetails(response.data));
            var role = response.data.charRole;
            dispatch(addRole(role));
        }
        catch (error) {
            console.log(error);
        }
    }

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
            <Hero />
            <div style={{ display: "flex", minHeight: "100vh", justifyContent: "center" }}>
                <div className="homepage" data-aos="zoom-in" data-aos-duration="2000" style={{ display: "block" }}>
                    <div style={{ margin: "50px" }}>
                        <div className="pg1">
                            <div id="rightpic1">
                                <img id="pic" src="/images/local.png" alt="img" width="100%" />
                            </div>
                            <div id="leftpic1">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <div style={{ marginTop: "30px" }}>
                                        <span style={{ fontSize: "45px" }}>LemFresh</span>
                                    </div>
                                </div>
                                <h3 style={{ textAlign: "justify", lineHeight: "35px", fontFamily: "'Nunito', sans-serif" }}>Welcome to our online marketplace for local services!
                                    We are thrilled to present a platform
                                    that connects you with talented professionals
                                    right in your own community. Whether you need a plumber,
                                    electrician, personal trainer, photographer, or any
                                    other service provider, our marketplace is designed
                                    to make your search effortless and efficient.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", minHeight: "100vh" }}>
                <div className="homepage" data-aos="zoom-in" data-aos-duration="2000">
                    <div style={{ margin: "50px" }}>
                        <div className="pg2">
                            <div id="rightpic1" style={{ display: "block", margin: "0 auto" }}>
                                <img id="pic" src="/images/service.png" alt="img" width="100%" />
                            </div>
                            <div id="leftpic1">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <div style={{ marginTop: "120px" }}>
                                        <span style={{ fontSize: "45px", marginTop: "20px" }}>Services</span>
                                    </div>
                                </div>
                                <h3 style={{ textAlign: "justify", lineHeight: "35px", fontFamily: "'Titillium Web', sans-serif" }}>
                                    We providing multiple services like plumber,
                                    electrician, personal trainer, photographer, or any
                                    other service provider, our marketplace is designed
                                    to make your search effortless and efficient.</h3>
                                <button style={{ backgroundColor: "grey", color: "black", borderRadius: "0px" }} onClick={() => navigate("/service")}>Add Service</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", minHeight: "100vh", justifyContent: "center" }}>
                <div className="homepage" data-aos="zoom-in" data-aos-duration="2000" style={{ display: "block" }}>
                    <div style={{ margin: "50px" }}>
                        <div className="pg1">
                            <div id="rightpic1">
                                <img id="pic" src="/images/support.png" alt="img" width="100%" />
                            </div>
                            <div id="leftpic1">
                                <div style={{ display: "block", margin: "0 auto" }}>
                                    <div style={{ display: "flex", justifyContent: "start" }}>
                                        <div style={{ marginTop: "120px" }}>
                                            <span style={{ fontSize: "45px" }}>Support</span>
                                        </div>
                                    </div>
                                    <h3 style={{ textAlign: "justify", lineHeight: "35px", fontFamily: "'Nunito', sans-serif" }}>
                                        Small businesses are the heartbeat of a community, and when we support them, we're investing in our own success.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </motion.div>


    );
}

export default Home;