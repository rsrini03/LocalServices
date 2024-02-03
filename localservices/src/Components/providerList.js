import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import providerService from '../Services/providerService';
import { addProviderDetails } from './Stores/MasterSlice';
import { addProviderEmail } from './Stores/MasterSlice';
import '../Styles/Providerlist.css'
import Footer from './Footer';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProviderList() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    const [details, setDetails] = useState([]);

    const { userDetails } = useSelector((state) => state.master);
    const location = userDetails.location;
    const { Token } = useSelector((state) => state.master);
    console.log(location);
    const { category } = useParams();
    console.log(category);
    const { providerDetails } = useSelector((state) => state.master);


    const fetchData = async () => {
        try {

            const response = await providerService.getProviderByCategoryAndLocation(category, location, Token);
            setDetails(response.data)
            console.log("response", " ", response.data);
            dispatch(addProviderDetails(response.data));
            console.log();
        }
        catch (errors) {
            console.log(errors);
        }
    }


    const navigate = useNavigate();

    const eventRedirect = (email) => {
        dispatch(addProviderEmail(email));
        navigate("/providerinfo");
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <div className='list-back' style={{ display: "flex", justifyContent: "space-evenly", alignContent: "center"}}>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>


                {
                    details.map((element) => {
                        return (
                            <>
                                <div >
                                <h1  style={{color:'white',marginBottom:"30px",fontFamily: "'Titillium Web', sans-serif" }}>PROVIDERS NEAR YOU</h1>
                                </div>

                                <Card sx={{ maxWidth: "100%",marginBottom: 10}}>
                                    <CardHeader

                                        title={element.firstName}
                                        subheader={element.serviceProviding}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image="/images/provider-profile.png"
                                        alt="Paella dish"
                                    />

                                    <CardActions disableSpacing>
                                       

                                        <Button onClick={() => {
                                            eventRedirect(element.email);
                                        }}>View Info</Button>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                        </ExpandMore>
                                    </CardActions>

                                </Card>
                            </>
                        );
                    })
                }


            </div>

          
        </div>
        <Footer/>
        </>
    )

}
