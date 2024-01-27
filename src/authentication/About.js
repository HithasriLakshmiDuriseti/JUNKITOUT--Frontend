import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'; 
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import './NavCSS.css';

function About(){
    return(
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
            <div className="about-container">
      <h1>About Us</h1>
      <div className="card-container">
        {/* Section 1 */}
        <div className="card-content">
          <img src={image1} alt="" className="card-image" />
          <div className="card-content-inner">
            <h2>Our Aim</h2>
            <p>
              At JUNK IT OUT, we are committed to providing top-quality junk removal services for people.
              We are working to make this society green.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="card-content">
          <img src={image2} alt="" className="card-image" />
          <div className="card-content-inner">
            <h2>Our Services</h2>
            <p>
              We offer a wide range of junk removal services, including Residential Junk Removal,
              Appliance and Electronics Recycling, Furniture Disposal, And More. No job is too big or too small for our team of professionals.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="card-content">
          <img src={image3} alt="" className="card-image" />
          <div className="card-content-inner">
            <h2>Our Process</h2>
            <p>
              Our process is simple and hassle-free. Just give us a call, text, or email, and we'll schedule a time to come out and give you a free estimate.
              If you're happy with the rewards, we'll get to work right away.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default About