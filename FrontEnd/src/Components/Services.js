import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import Footer from './Footer';
import '../Styles/services.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Services = () => {

    useEffect(() => {
        window.scrollTo(
          {
            top: 0,
            behavior: "smooth"
          }
        )
      })

    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='service-main'>
                <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: "30px" }}>
                        <Card sx={{ maxWidth: "80vh", marginRight: "30px" }} onClick={() => navigate('/providerlist/Home')} >
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
                                        Our services encompass a wide range of cleaning tasks, including dusting, vacuuming, mopping, disinfecting, bathroom and kitchen cleaning, window cleaning, upholstery cleaning, and much more. We pay attention to detail and strive for excellence in every aspect of our service, ensuring that every nook and cranny of your home is cleaned to perfection.Our dedicated team of trained and experienced cleaners is committed to providing a spotless and tidy home environment, ensuring that you can enjoy a clean and comfortable living space without the hassle of doing it yourself.                                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                        <Card sx={{ maxWidth: "80vh" }} onClick={() => navigate('/providerlist/automobile')}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/images/automobile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Automobile
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                                        We believe in transparent and honest communication with our customers. Before any work is performed, our technicians will provide a detailed explanation of the required services, along with an estimate of the costs involved. We prioritize your satisfaction and will keep you informed throughout the repair process, ensuring that you are comfortable and confident in the services being provided.We also provide comprehensive diagnostics and repairs for various systems, including engine, transmission, suspension, electrical, and more.                                             </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: "30px" }}>
                        <Card sx={{ maxWidth: "80vh", marginRight: "30px" }} onClick={() => navigate('/providerlist/beauty')}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/images/beauty.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Beauty
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                                        Our dedicated team of skilled beauty experts offers a wide range of services, catering to your unique beauty needs and preferences, all within the comfort and convenience of your own home or desired location.Experience the convenience and luxury of Beauty Local Service and let our skilled professionals pamper you in the comfort of your own home. Sit back, relax, and indulge in a personalized beauty experience that will leave you looking and feeling your best.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                        <Card sx={{ maxWidth: "80vh" }} onClick={() => navigate('/providerlist/appliances')}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/images/appliances.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Appliances
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our team consists of skilled technicians who are experienced in handling various appliances, including refrigerators, washing machines, dryers, dishwashers, ovens, stoves, microwaves, and more. Whether you are facing issues with performance, functionality, or any other aspect of your appliances, our experts have the knowledge and expertise to diagnose and resolve the problem effectively.Contact us today to schedule a service and experience our commitment to excellence in appliance care.                                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </div>

            </div>

            <Footer/>

        </motion.div>
    )
}

export default Services
