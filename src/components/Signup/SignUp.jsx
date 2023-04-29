import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
    const [error, setError] = useState("");
    const {createUser} = useContext(AuthContext)
    const hangleSignUp = (event) =>{
     event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    setError("")

    if(password != confirm){
       setError("Your Password Didn't match")
       return
    }
    else if(password.length < 6){
        setError("must be in  charecters or longer")
    }
    createUser(email, password)
    .then(result => {
    console.log(result.user);
    }
    )
    .catch(error => {
        console.log(error)
        setError("Dal main kuch kala hain")
    })
    }
    return (
<div className='login-container'>
      <form onSubmit={hangleSignUp} className="login-form"> 
         <h3 className='Login-title'>Login</h3>
        <label htmlFor="email">Email</label>
        <input type="email" id="" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="" name="password" required />

        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" id="" name="confirm" required />

        <input type="submit" value="Submit" />
        <p>Already have an account? <Link to = "/login" style={{color:"ornage", fontWeight:"bolder"}}>Login</Link> </p>
        <p>{error}</p>
      </form>
    </div>
    );
};

export default SignUp;