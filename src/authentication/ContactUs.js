import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css';
import './NavCSS.css';

function ContactUs(){
    const [showForm, setShowForm] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [faqData, setFaqData] = useState([
    { id: 1, question: 'How do I reset my password?', answer: 'To reset your password, click on the "Forgot Password" link on the login page.' },
    { id: 2, question: 'What products do you offer?', answer: 'We offer a wide range of products including ...' },
     ]);

  const [setAdminAnswer] = useState('');
  const [adminEmail] = useState('admin@example.com'); 
  const handleAdminAnswer = (questionId) => {
  
    const updatedFaqData = faqData.map((faqItem) =>
      faqItem.id === questionId ? { ...faqItem, showAnswer: !faqItem.showAnswer } : faqItem
    );
    setFaqData(updatedFaqData);
    setAdminAnswer('');
  };

  const handleContactMembersClick = () => {
    setShowForm(true);
    setShowFAQ(true); 
  };
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
            <div className="contact-container">
                <h1>Contact Us</h1>

                {!showForm && !showFAQ && (
                <div className="cards-container">
                    <div className="card">
                        <span role="img" aria-label="Smile" style={{ fontSize: '40px', marginBottom: '10px' }}>😊</span>
                        <h2>Talk to Our Members </h2>
                        <p>Contact our team members for any questions or assistance.</p>
                        <div className="button-container">
                            <button onClick={handleContactMembersClick}>Contact Members</button>
                        </div>
                    </div>
                </div>
                )}
                {showForm && (
                <div className="form-container">
                    <h2>Drop Us a Line!</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                             <label htmlFor="email">Email:</label>
                             <input type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                    <p className="admin-contact">For any queries, contact <a href={`mailto:${adminEmail}`}>{adminEmail}</a></p>
                </div>
                )}

                {showFAQ && (
                <div className="faq-container">
                    <h2>Frequently Asked Questions</h2>
                    {faqData.map((faqItem) => (
                    <div key={faqItem.id} className="faq-item">
                        <div className="question">
                            <span>{faqItem.question}</span>
                            {!faqItem.showAnswer && (
                            <div className="arrow-icon" onClick={() => handleAdminAnswer(faqItem.id)}> &#9660; Answer
                            </div>
                            )}
                            {faqItem.showAnswer && (
                            <div className="arrow-icon" onClick={() => handleAdminAnswer(faqItem.id)}>
                            &#9650; Hide Answer
                            </div>
                            )}
                            {faqItem.showAnswer && 
                            <div className="answer">{faqItem.answer}</div>}
                    </div>
                </div>
            ))}
            </div>
      )}
    </div>
        </div>
    )
}

export default ContactUs