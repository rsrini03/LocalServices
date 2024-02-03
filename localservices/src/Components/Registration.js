import React from 'react';
import Swal from 'sweetalert2';
import '../Styles/Registration.css';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography, createTheme, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from '../schemas/signupSchema';
import { useState } from 'react';
import UserAuthService from '../Services/UserAuthService';
import { motion } from 'framer-motion';
import "aos/dist/aos.css";
import AOS from 'aos';
import Footer from './Footer'
import { useEffect } from 'react';

import providerService from '../Services/providerService';


const theme = createTheme({
    palette: {
        primary: {
            main: "#FFA733"
        },
        secondary: {
            main: "#61988E"
        }
    }
});


export default function Registration() {

    // useEffect(() => {
    //     window.scrollTo(
    //       {
    //         top: 0,
    //         behavior: "smooth"
    //       }
    //     )
    //   })

    const navigate = useNavigate();

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        charRole: "",
        gender: "",
        dob: "",
        phoneNumber: "",
        address: "",
        location: "",
        username: "",
    };

    const [role, setRole] = useState("");

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialState,
            validationSchema: SignUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                eventRegister();
                action.resetForm();
            }
        })

    const eventRegister = async () => {
        values.charRole = role;
        try {


            const response = await UserAuthService.saveUser(values);

            console.log(response.data);

            if (response.data === "Email already exists!!!!") {
                throw "Email already exists";
            } else {
                let timerInterval;
                Swal.fire({
                    title: "Registered Successfully !!",
                    html: "Redirecting in <b></b> milliseconds.",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector("b");
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft();
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);

            }


        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`,
            });
            console.log(error);
        }
    };

    const onOptionChange = (e) => {
        setRole(e.target.value);
    };


    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <ThemeProvider theme={theme}>
                <div className='reg-container'  >
                    <div style={{ margin: '20px' }}>
                        <div>
                            <div style={{ display: "block", margin: "0 auto" }}>
                                <div style={{ minHeight: "100vh" }}>
                                    <form id='form' onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column", backdropFilter: "blur(5px)", padding: "50px", backgroundColor: "rgba(255, 255, 255, 0.306)" }}  >
                                        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

                                        <span style={{ textAlign: "center" }}><b>register and enjoy our service</b></span>
                                        <TextField
                                            id="standard-number"
                                            label="First Name"
                                            name="firstName"
                                            variant="standard"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            size="small"
                                        />
                                        {errors.firstName && touched.firstName ? (
                                            <p style={{ color: "red" }}>{errors.firstName}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Last Name"
                                            name="lastName"
                                            type="text"
                                            variant="standard"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.lastName && touched.lastName ? (
                                            <p style={{ color: "red" }}>{errors.lastName}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Username"
                                            name="username"
                                            type="text"
                                            variant="standard"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.username && touched.username ? (
                                            <p style={{ color: "red" }}>{errors.username}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Email"
                                            name="email"
                                            type="text"
                                            variant="standard"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.email && touched.email ? (
                                            <p style={{ color: "red" }}>{errors.email}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            variant="standard"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.password && touched.password ? (
                                            <p style={{ color: "red" }}>{errors.password}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            variant="standard"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.confirmPassword && touched.confirmPassword ? (
                                            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                                        ) : null}
                                        <p
                                            style={{
                                                fontSize: "17px",
                                                marginTop: "20px",
                                                fontWeight: "900",
                                            }}
                                        >
                                            Role
                                        </p>
                                        <span
                                            style={{
                                                margin: "10px",
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                            }}
                                        >
                                            <span>
                                                <label style={{ marginRight: "10px", fontWeight: "500" }}>
                                                    User
                                                </label>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="user"
                                                    onChange={onOptionChange}
                                                    checked={role === "user"}
                                                />
                                            </span>
                                            <span>
                                                <label style={{ marginRight: "10px", fontWeight: "500" }}>
                                                    Business
                                                </label>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="business"
                                                    onChange={onOptionChange}
                                                    checked={role === "business"}
                                                />
                                            </span>
                                            <span>
                                                <label style={{ marginRight: "10px", fontWeight: "500" }}>
                                                    Service Provider
                                                </label>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="provider"
                                                    onChange={onOptionChange}
                                                    checked={role === "provider"}
                                                />
                                            </span>
                                        </span>
                                        <TextField
                                            id="standard-basic"
                                            label="Date of Birth"
                                            name="dob"
                                            type="date"
                                            variant="standard"
                                            value={values.dob}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.dob && touched.dob ? (
                                            <p style={{ color: "red" }}>{errors.dob}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Gender"
                                            name="gender"
                                            type="text"
                                            variant="standard"
                                            value={values.gender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.gender && touched.gender ? (
                                            <p style={{ color: "red" }}>{errors.gender}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Phone Number"
                                            name="phoneNumber"
                                            type="text"
                                            variant="standard"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber ? (
                                            <p style={{ color: "red" }}>{errors.phoneNumber}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Address"
                                            name="address"
                                            type="text"
                                            variant="standard"
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.address && touched.address ? (
                                            <p style={{ color: "red" }}>{errors.address}</p>
                                        ) : null}
                                        <TextField
                                            id="standard-basic"
                                            label="Location"
                                            name="location"
                                            type="text"
                                            variant="standard"
                                            value={values.location}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{ marginTop: "20px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {errors.location && touched.location ? (
                                            <p style={{ color: "red" }}>{errors.location}</p>
                                        ) : null}
                                        <span style={{ display: "flex", alignItems: "center" }}>
                                            {" "}
                                            <Checkbox />
                                            <Typography sx={{ fontSize: "12px" }}>
                                                {" "}
                                                By agreeing to the Terms of Service and Privacy Policy
                                            </Typography>
                                        </span>
                                        <Button
                                            style={{
                                                marginTop: "10px",
                                                width: "100%",
                                                marginBottom: "10px",
                                                backgroundColor: "gray",
                                                color: "black"
                                            }}
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                        <h5>
                                            Already have an account ?{" "}
                                            <span>
                                                <a
                                                    onClick={() => navigate("/login")}
                                                    style={{ cursor: "pointer", color: "white" }}
                                                >
                                                    Sign In
                                                </a>
                                            </span>{" "}
                                        </h5>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>

            <Footer/>
        </motion.div>
    )
}