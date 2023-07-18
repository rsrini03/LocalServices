import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AOS from 'aos';
import "aos/dist/aos.css";
import '../Styles/services.css';
import { useEffect } from 'react';
const Services = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "30px" }} data-aos="zoom-in-up" data-aos-duration="2000">
            <div className='services'>
                <div className='serv'>
                    <Card style={{ width: "400px" }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    Your Home, Our Expertise!!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv'>
                    <Card sx={{ maxWidth: 400 }} style={{ width: "100%" }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    This is Automobile service
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400 }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    This is Beauty service
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400 }}>
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
                                    This is Appliances service
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/electrical.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Electrical Expert
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Your Home, Our Expertise!!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='serv' >
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/plumbing.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Plumbing Expert
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Your Home, Our Expertise!!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services
