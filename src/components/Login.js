import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './Firebase';
function Login() {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  login = (event) =>{
        event.preventDefault();//this stop the refresh
        //login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //login in redirect page
            history.push("/");
        })
        .catch((e)=> alert(e.message));
        
    }
    const  register = (event) =>{
        event.preventDefault();//this stop the refresh
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            //created user and login, redirect to a page
            history.push("/");
        })
        .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""/>
            </Link> 
            <div className="login_container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login_signInButton">Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,
                     our Cookies Notice and our 
                     Interest-Based Ads Notice.</p>
                 <button onClick={register} type="submit" className="login_registerButton">Create your amazone account</button>    
            </div>
        </div>
    )
}

export default Login
