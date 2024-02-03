import * as Yup from 'yup'

export const AddServiceSchema = Yup.object({
    category:Yup.string().required("Category is required"),
    serviceProviding:Yup.string().required("ServiceProviding is required"),
    experience:Yup.string().required("experience is required"),
    workingHours:Yup.string().required("workingHours is required"),
    price :Yup.string().required("Please enter the price"),
    
})