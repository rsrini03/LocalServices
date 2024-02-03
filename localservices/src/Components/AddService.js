import React from 'react'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion'
import { AddServiceSchema } from '../schemas/AddServiceSchema';
import { useFormik } from "formik";
import providerService from '../Services/providerService';
import { TextField, Button, Checkbox, Typography, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const AddService = () => {

    const navigate = useNavigate();

    const { Token } = useSelector(state => state.master);
    const { Emails } = useSelector(state => state.master);

    const initialState = {
        category: "",
        serviceProviding: "",
        experience: "",
        workingHours: "",
        price:"",
    };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialState,
            validationSchema: AddServiceSchema,
            onSubmit: (values, action) => {
                console.log(values);
                updateRegister();
                action.resetForm();
            }
        })

    const updateRegister = async () => {
        try {
            const response = await providerService.updateProvider(Emails, values, Token);
            console.log(response);

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Added Service !',
                showConfirmButton: false,
                timer: 2000
            })

            setTimeout(() => {
                navigate('/')
            }, 2000)

        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}

        >

            <div className='bgclr'>
                <div className='form' style={{ width: "20%", margin: "0 auto", marginTop: "90px" }}>

                    <div style={{ backdropFilter: "blur(2px)", padding: "30px", backgroundColor: "rgba(255, 255, 255, 0.306)" }}>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <h2 style={{ textAlign: "center" }}>Add Services</h2>

                            <TextField
                                id="standard-basic"
                                label="Category"
                                name="category"
                                type="text"
                                variant="standard"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{ marginTop: "20px" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.category && touched.category ? (
                                <p style={{ color: "red" }}>{errors.category}</p>
                            ) : null}


                            <TextField
                                id="standard-basic"
                                label="ServiceProviding"
                                name="serviceProviding"
                                type="serviceProviding"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{ marginTop: "20px" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.serviceProviding && touched.serviceProviding ? (
                                <p style={{ color: "red" }}>{errors.serviceProviding}</p>
                            ) : null}

                            <TextField
                                id="standard-basic"
                                label="experience"
                                name="experience"
                                type="experience"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{ marginTop: "20px" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.experience && touched.experience ? (
                                <p style={{ color: "red" }}>{errors.experience}</p>
                            ) : null}

                            <TextField
                                id="standard-basic"
                                label="workingHours"
                                name="workingHours"
                                type="workingHours"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{ marginTop: "20px" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.workingHours && touched.workingHours ? (
                                <p style={{ color: "red" }}>{errors.workingHours}</p>
                            ) : null}

                            <TextField
                                id="standard-basic"
                                label="price"
                                name="price"
                                type="price"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="small"
                                style={{ marginTop: "20px" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {errors.price && touched.price ? (
                                <p style={{ color: "red" }}>{errors.price}</p>
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
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AddService