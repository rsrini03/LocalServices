import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
    firstName: Yup.string().required(" firstName is required"),
    lastName: Yup.string().required(" lasttName is required"),
    username: Yup.string().matches(/^[a-zA-Z0-9_]{6,16}$/).min(6).required("Please enter the username !"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(12).required("Password is required"),
    gender:Yup.string().required("gender is required"),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required !'),    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, "phone number is not valid").required("please enter the mobile number"),
    address: Yup.string().min(15).required("please enter the address"),
    location:Yup.string().required("location is required"),
})