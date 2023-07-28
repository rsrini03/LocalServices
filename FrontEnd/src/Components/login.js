import React from 'react'
import { useState } from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import { SignInSchema } from '../schemas/signInSchema';
import UserService from '../Services/userService'
import UserAuthService from '../Services/UserAuthService';
import { addUser, addToken, addEmails, addColor, addRole } from '../Components/Stores/MasterSlice';
import { useDispatch } from "react-redux";
import '../Styles/login.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { TextField, Button, Checkbox, Typography, createTheme, ThemeProvider } from "@mui/material";
import randomColor from 'randomcolor';
import "aos/dist/aos.css";
import AOS from 'aos';
import Footer from './Footer';
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
const Login = () => {

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    )
  })

  const dispatch = useDispatch();
  const colors = randomColor();

  const initialState = {
    email: "",
    password: "",
  };



  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {

    try {

      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;


      if (response.message != "Request failed with status code 400") {
        let timerInterval;
        Swal.fire({
          title: "Successfully LoggedIn !",
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
          // dispatch(addUser(data));
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          dispatch(addColor(colors));

          navigate("/");
        }, 3000);
      } 
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed",
      });
    
    }
  };



  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opasity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

    >
      <ThemeProvider theme={theme}>
        <div className='bgclr'>
          <div className='form' style={{ width: "30%", margin: "0 auto", marginTop: "90px"}} >

            <div style={{ backdropFilter: "blur(2px)", backgroundColor: "rgba(255, 255, 255, 0.306)", padding:"20px" }}>
              <div style={{ width:'100%'}}>
                <form className='login-form' onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                  <h2 style={{ textAlign: "center" }}>Login</h2>
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

                  <Button
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      marginBottom: "10px",
                      backgroundColor: "gray",
                      color: "black"
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>

                  <h5>
                    Don't have an account ?{" "}
                    <span>
                      <a
                        onClick={() => navigate("/register")}
                        style={{ cursor: "pointer", color: "white" }}
                      >
                        Sign Up
                      </a>
                    </span>{" "}
                  </h5>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
      <Footer />
    </motion.div>
  )
}
export default Login;