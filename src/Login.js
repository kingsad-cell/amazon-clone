import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";
function Login() {
  
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = event => {

    event.preventDefault(); // this stops the refresh!!!
    // do the login logic
    auth.SignInWithEmailAndPassword(email, password)
    .then((auth) => {
        // logged in successfully, redirect to home page
          history.push("/");

    })
    .catch((e) => alert(e.message));
  };
   
  const register = event => {

    event.preventDefault(); // this stops the refresh!!!
    // do the register logic
      auth.CreateUserWithEmailAndPassword(email, password)
    .then(auth => {
      // create a user and logged in
      
    })
    .catch((e) => alert(e.message));
  };
  
  
  
  return (
        <div className="Login">
            <Link to="/">
              <img 
                className="Login__logo"
              src="https://i.ytimg.com/vi/4IHPTTtn-Fw/maxresdefault.jpg"
              alt=""
              />
            </Link>
            <div className="Login__container">
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
              <h5>Password</h5>
              <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
              <button onClick={login} type="submit" className="Login__SignInButton">Sign In</button>
            </form>
            <p>By signing up you agree the term and conditions of amazon</p>
            <button onClick={register} className="Login__RegisterButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}
export default Login;
