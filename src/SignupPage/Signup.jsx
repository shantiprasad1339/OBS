import React, {useState} from "react";
import './signup.css'
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault()
        console.log(username, email, password)
        const url = 'http://localhost:3001/user/signup'; 
      
        axios.post(url, {
          'username': username,
          'password': password,
          'email': email
        })
        .then((res) => {
          console.log(res);
          navigate('/login')
          alert('SignUp successfully Please Login ')
        })
        .catch((error) => {
          console.error(error);
        });
      }

    return (
        <>

            <nav class="nav">
            <img
                        src="src/HomePage/img/banking-logo.png"
                        alt="Bankist logo"
                        class="nav__logo"
                        id="logo"
                        designer="Jonas"
                        data-version-number="3.0"
                    />
                    <span className="banking-title">Banking System</span>
                <ul class="nav__links">
                    {/* <li class="nav__item">
                        <a class="nav__link" href="/">Home</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--1">Features</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--2">Operations</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--3">Testimonials</a>
                    </li> */}
                    <li class="nav__item">
                        <a class="nav__link" href="/signup">SignUp</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/login">Login</a>
                    </li>
                </ul>
            </nav>


            <div class="container12">
                <div className="row">
                    <div class="card">
                        <div class="card_title">
                            <h1>Create Account</h1>
                            <span>Already have an account? <a href="/login">Sign In</a></span>
                        </div>
                        <div class="form">
                            <form action="/register" method="post" onSubmit={handleSignup}>
                                <input type="text" name="username" id="username" placeholder="UserName" 
                                required="true"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}/>

                                <input type="email" name="email" placeholder="Email" id="email" 
                                  required="true"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />

                                <input type="password" name="password" placeholder="Password" id="password" 
                                  required="true"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}/>

                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                        <div class="card_terms">
                            <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;