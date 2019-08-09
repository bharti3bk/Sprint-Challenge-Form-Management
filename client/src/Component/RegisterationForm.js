import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";  


function RegisterationForm({ values ,errors, touched, isSubmitting}){ 
  return(
      <Form className="ui form">
      <div className="field">
      <label id="lableOne">UserName</label>
      {touched.username && errors.username && <p>{errors.username}</p>}
      <Field type="text" name="username" placeholder="UserName" />
      </div>
      <div className="field">
        <label id="lableThree">Password</label>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password"/>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <Field type="checkbox" name = "check" tabIndex="0" checked={values.check}/>
          <label id="lableFour">I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button className="ui button" type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  ) 
} 

const UserRegisterationForm = withFormik({
  mapPropsToValues({username , password}){
      return {
        username: username || "",
        password: password || ""
      }
  }, 
  validationSchema: Yup.object().shape({
    username: Yup.string()
        .lowercase("name should be of lowercase")
        .required("name is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or longer")
        .required("Password is required")
    }), 
   handleSubmit(values, {resetForm}){
     const results = axios.post("http://localhost:5000/api/register" , values) 
     console.log(values)
     results.then(res => {
         console.log(res)
         resetForm();
     })
     .catch(error => {
         console.log(error);
         resetForm();
     })
   }
  })(RegisterationForm)
  
export default UserRegisterationForm;


