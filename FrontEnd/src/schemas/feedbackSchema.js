import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
    email:Yup.string().email().required("Email is Required !"),
    name:Yup.string().min(6).required("Name is required !"),
    comment:Yup.string().min(10).required("Please enter the comment")
});