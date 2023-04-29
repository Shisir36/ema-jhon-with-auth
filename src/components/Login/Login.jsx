import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
  const [show, setShow] = useState(false)
    const {Signin} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       Signin(email, password)
      .then(result => {
        console.log(result.user);
        form.reset();
        navigate(from, {replace: true})
      })
      .catch(error => {
        console.log(error);
      })
    }
    return (
     <div>
     <div className='login-container'>
      <form onSubmit={handleLogin} className="login-form"> 
         <h3 className='Login-title'>Login</h3>
        <label htmlFor="email">Email</label>
        <input type="email" id="" name="email" required />

        <label htmlFor="password">Password</label>
        <input type={show ? "text" : "password"} id="" name="password" required />
        <p onClick={()=>{setShow(!show)}}> <small>
         {
          show ? <span>Hide Password</span> : <span>Show password</span>
         }

        </small>
        </p>
        <input type="submit" value="Submit" />
        <p>New in ema-jhon? <Link to = "/Signup" style={{color:"ornage", fontWeight:"bolder"}}>Signup</Link> </p>
      </form>
    </div>
        </div>
    );
};

export default Login;