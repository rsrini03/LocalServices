import React from "react";
import '../Styles/homepage.css';
import Hero from "./Hero";

const Home = () => {

    return (
        <>
            <Hero />
            <div className="home">
                <div className="pg1">
                    <div id="rightpic1">
                        <img id="pic" src="/images/img2.png" alt="img" width="100%" />
                    </div>
                    <div id="leftpic1">
                    <h1 style={{marginBottom:"30px",fontSize:"45px"}}>LemFresh</h1>
                        <h3 style={{textAlign:"justify"}}>Welcome to our online marketplace for local services!
                            We arethrilled to present a platform
                            that connects you with talented professionals
                            right in your own community. Whether you need a plumber,
                            electrician, personal trainer, photographer, or any
                            other service provider, our marketplace is designed
                            to make your search effortless and efficient.</h3>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Home;