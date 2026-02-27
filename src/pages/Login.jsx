
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  let navigate=useNavigate()
  let[form,setform]=useState({email:"",password:""})
    let changes=(e)=>{
      setform({...form,[e.target.name]:e.target.value})
    }
    console.log("login cred",form)
     let login= async(e)=>{
    e.preventDefault();
    if(!form.email || !form.password)
    {
      alert("all felids mandatory");
     return;
    }
    try{
      let res=await axios.get(`http://localhost:3000/users?email=${form.email}`);
      console.log(res)
      if(res.data.length===0)
      {
        alert("user is not  exisisted");
        return;
      }
      let user =res.data[0];
      console.log(user)
      if(user.password!==form.password)
      {
        alert("password is invalid");
        return;
      }
      alert("Login successfull")
      localStorage.setItem("user",JSON.stringify(res)); 
      navigate("/")
        setTimeout(()=>{
        window.location.reload();
      },100)
       
     }
    catch(err)
    {
      console.log(err)
    }
    }
   
  return (
    <div className="login-page">
      <div className="login-card">
        <h3 className="login-title">Login</h3>
        <Form onSubmit={login}>
          {/* Email */}
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
               name="email"
              
               onChange={changes}
            />
          </Form.Group>
          {/* Password */}
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              
               onChange={changes}
            />
          </Form.Group>
          {/* Remember me + Forgot password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check
              type="checkbox"
              label="Remember me"
            />
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-100 login-btn"
          >
            Login
          </Button>
        </Form>

        {/* Footer */}
        <div className="login-footer">
          Don’t have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;