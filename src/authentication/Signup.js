import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';
import './Signup.css';

function Signup(){

    const [values, setValues]= useState({
        name: '',
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
    };

    useEffect(()=> {
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios
            .post('http://localhost:8081/signup', values)
            .then(res => {
                alert("Account created successfully")
                navigate('/')
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
                <div className='signup-form'>
                    <h2>Sign Up</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter Name" name = 'name'
                            onChange={handleInput}/>
                            {errors.name && <span>{errors.name}</span>}
                        </div>
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
                        <button type='submit'>Sign up</button>
                        <p>Have an account?<Link to='/'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup