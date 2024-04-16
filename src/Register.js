import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./Validation";
// import axios from "axios";
import "./Login.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Register() {
  const  {values,errors,handleBlur,handleChange,handleSubmit,touched}=useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        console.log(values);
        // Here we are emptying the fields
        action.resetForm();
      },
    });  
    console.log(values);

   async function signUp(){
      let item={...values};
      console.warn(item);

    let result= await fetch("http://127.0.0.1:8000/api/registerUser",{
        method:"POST",
        body:JSON.stringify(item),
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      });
      result=await result.json();
      console.log("result",result);
    }
  console.log(errors);

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="Error"
        />
      </Link>
      <div className="login__container">
        <h1>Create account</h1>
        <form  onSubmit={handleSubmit}>
          <h5>Your name</h5>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
          <h5>Mobile number or email</h5>
          <input
           type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
          <h5>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            id="password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
          <h5>Re-enter password</h5>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            autoComplete="off"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p>{errors.confirm_password}</p>
          ) : null}
          <button className="login__signInButton" type="submit">
            Continue
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <p className="sign__in">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
