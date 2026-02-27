import React, {  useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  let navigate=useNavigate();
  let[form,setform]=useState({name:"",email:"",password:""})
  let changes=(e)=>{
    setform({...form,[e.target.name]:e.target.value}) 
  }
  let register= async(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.password)
    {
      alert("All fields are required");
      return;
    }
    try{
      let res=await axios.get(`http://localhost:3000/users?email=${form.email}`);
      console.log(res.data)
      if(res.data.length>0)
      {
        alert("user already exists");
        return;
      }
      await axios.post("http://localhost:3000/users",form);
      alert("registration successfull");
      navigate('/login')

    }
    catch(err)
    {
      console.log(err)
    }
  }
  console.log(form)

  return (
    <div className="register-page">
      <div className="register-card">
        <h3 className="register-title">Create Account</h3>
        <Form    onSubmit={register}>
          {/* Full Name */}
          <Form.Group className="mb-3" controlId="registerName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
             
              onChange={changes}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              
               onChange={changes}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Create password"
              
               onChange={changes}
            />
          </Form.Group>
          {/* Terms */}
          <Form.Group className="mb-3" controlId="registerTerms">
            <Form.Check
              type="checkbox"
              label="I agree to the Terms & Conditions"
            
            />
          </Form.Group>

          {/* Register Button */}
          <Button
            variant="success"
            type="submit"
            className="w-100 register-btn"
           
          >
            Register
          </Button>
        </Form>

        {/* Footer */}
        <div className="register-footer">
          Already have an account? <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;