import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Validation from'./LoginValidation';
import axios from 'axios';
import './Login.css';
import './NavCSS.css'

function Login(){
    const [values, setValues]= useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    useEffect(()=> {
        if(errors.email === "" && errors.password === ""){
            axios
            .post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }
                else{
                    alert("No account existed with this details.\nClick on Create Account to create a new account.")
                }
            })
            .catch(err => console.log(err));
        }
    });

    return (
        <div>
            <div>
                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <h2 className="logo">Junk It Out</h2>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Email" name='email'
                            onChange={handleInput}/>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput}/>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <button type='submit'>Log in</button>
                        <p>Didn't have an account?<Link to='/signup'>Create Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login