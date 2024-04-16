import * as Yup from "yup"

export const signUpSchema=Yup.object({
    name:Yup.string().min(5).max(25).required("Please Enter your name"),
    email:Yup.string().email().required("Email must have @example"),
    password:Yup.string().min(5).max(10).required("Enter your password"),
    confirm_password:Yup.string().min(5).max(10).required("").oneOf([Yup.ref('password'),null],"password must be matched"),
});
export const LoginSchema=Yup.object({
    email:Yup.string().email().required("Email must have @example"),
    password:Yup.string().min(5).max(10).required("Enter your password"),
})