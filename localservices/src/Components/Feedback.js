import { useFormik } from 'formik'
import React from 'react'
import { feedbackSchema } from '../schemas/feedbackSchema'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import userService from '../Services/userService'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../Styles/feedback.css'
import Footer from './Footer'

const Feedback = () => {

    const navigate = useNavigate();

    const { Token } = useSelector(state => state.master);

    const initialState = {
        name: "",
        email: "",
        comment: "",
    }

    const { handleChange, handleBlur, values, errors, handleSubmit, touched } = useFormik({
        initialValues: initialState,
        validationSchema: feedbackSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventFeedback();
            action.resetForm();
        }
    })

    useEffect(() => {
        window.scrollTo(
          {
            top: 0,
            behavior: "smooth"
          }
        )
      })

    const eventFeedback = async () => {

        try {

            const response = await userService.addfeedback(values, Token);
            console.log(response);

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your feedback has been recieved',
                showConfirmButton: false,
                timer: 2000
            })

            setTimeout(() => {
                navigate("/")
            }, 2000)

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='feedback'>


                <h1 style={{ textAlign: "center",padding:"20px", fontFamily: "'Titillium Web', sans-serif" }}>Feedback Form</h1>

                <div style={{ width: "50%", margin: "0 auto" }}>
                    <form onSubmit={handleSubmit}>

                        <div style={{ display: "grid", placeItems: "center" }}>

                            <div style={{ marginTop: "30px" }}>

                                <div className="mb-3">
                                    <input type="email" className="form-control" values={values.email} name='email' onChange={handleChange} onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please enter the Email' />
                                    {errors.email && touched.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
                                </div>
                                <div className="mb-3">

                                    <input type="text" className="form-control" id="exampleInputPassword1" values={values.name} name='name' onChange={handleChange} onBlur={handleBlur} placeholder='Please enter the Name' />
                                    {errors.name && touched.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
                                </div>
                                <div className="mb-3">

                                    <input type="text" className="form-control" id="exampleInputPassword1" values={values.comment} name='comment' onChange={handleChange} onBlur={handleBlur} placeholder='Enetr your comment' />
                                    {errors.comment && touched.comment ? <p style={{ color: "red" }}>{errors.comment}</p> : null}
                                </div>
                                <button type="submit" className="btn btn-primary" style={{borderRadius:"5px"}}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default Feedback