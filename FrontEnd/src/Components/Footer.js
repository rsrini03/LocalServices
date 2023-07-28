import React from 'react'
import '../Styles/footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <div style={{ display: "flex" }}> <img src="/images/lemfresh.png" alt='' height="70px" width="65px" /><h3  style={{cursor:"pointer",fontSize:"50px"}} onClick={()=>navigate('/')}><span>L e m F r e s h</span></h3></div>

                    <p class="footer-links">

                        <a  style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Home</a>

                        <a style={{cursor:"pointer"}} onClick={()=>navigate('/customer')} >Customer Support</a>

                        <a style={{cursor:"pointer"}} onClick={()=>navigate('/service')}>Services</a>

                        <a style={{cursor:"pointer"}} onClick={()=>navigate('/about')}>About</a>

                        <a style={{cursor:"pointer"}} onClick={()=>navigate('/login')}>Login</a>

                        <a style={{cursor:"pointer"}} onClick={()=>navigate('/register')}>Registeration</a>


                    </p>

                    <p class="footer-company-name">Lemfresh © 2023</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Tamil Nadu, India</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 7904161298</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">rsrini169@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span style={{ textAlign: "justify",fontSize:"20px" }}>About our company</span>
                        We offering exceptional customer service, often going the extra mile to meet customer expectations.
                    </p>

                    <div class="footer-icons">

                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaGithub/></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer
