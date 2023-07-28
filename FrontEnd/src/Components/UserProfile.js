import React from 'react'
import '../Styles/UserProfile.css'
import { userDetails } from './Stores/MasterSlice'
import { useSelector } from 'react-redux'
import { useEffect } from "react";


const UserProfile = () => {
    const { userDetails } = useSelector((state) => state.master);
    useEffect(() => {
        // AOS.init();
    }, []);

    console.log(userDetails);
    return (

        <div className="profile-card-content">
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "20px",
                    margin: "40px",
                }}
            >
                <div style={{ width: '80%', display: 'block', margin: "0 auto" }}>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div>
                            <h2 className="profile-field">First Name</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.firstName}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div>

                            <h2 className="profile-field">Last Name</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.lastName}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div>
                            <h2 className="profile-field">Username</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.username}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div>
                            <h2 className="profile-field">Date Of Birth</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.dob}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div className="profile-field">
                            <h2>Email ID</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.email}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div className="profile-field">
                            <h2>Phone Number</h2>
                        </div>
                        <div className="profile-value">
                            <h2>{userDetails.phoneNumber}</h2>
                        </div>
                    </div>
                    <div style={{display:"flex",gridGap: "50px"}}>
                        <div className="profile-field">
                            <h2>location</h2>
                        </div>

                        <div className="profile-value">
                            <h2>{userDetails.location}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile
