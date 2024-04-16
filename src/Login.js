import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import { useFormik } from 'formik'
import { LoginSchema } from './Validation';

const initialValues={
  email:"",
  password:""
}
function Login() {
   const {values,errors,handleChange,handleBlur,handleSubmit,touched}=useFormik({
    initialValues,
    validationSchema:LoginSchema,

    onSubmit:(values,action)=>{
      console.warn(values);
      action.resetForm();
    }
   })
   console.log(errors);
  return (
    <div className='login'>
        <Link to="/">
        <img
          className="login__logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="Error"
        />
      </Link>
        <div className='login__container'>
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
            <h5>E-mail</h5>
            <input 
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
            <h5>Password</h5>
            <input 
            type='password'
            id='password'
            name='password'
            autoComplete='off'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
            <button className='login__signInButton'type='submit'>Sign-In</button>
        </form>
        <p>
            By Signing-in you agree to Amazon's terms and conditions. Want to Register <Link to="/register">Register</Link>
        </p>
        
            </div>
    </div>
  );
}

export default Login;
