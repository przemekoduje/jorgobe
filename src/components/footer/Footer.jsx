import './footer.scss'
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Dodaj logikę subskrypcji tutaj, np. wyślij email do API
        console.log('Email:', email);
    };        
    
    return (
    <div className='footer'>
        <div className="categories">
            <div className="category">
                <div className="category-head">
                    <h6>Explore</h6>
                </div>
                <div className="navi-buttons">
                    <a href="" className="navi-button">SHOP ALL</a>
                    <a href="" className="navi-button">STORIES</a>
                    <a href="" className="navi-button">ABOUT US</a>
                </div>
            </div>
            <div className="category">
                <div className="category-head">
                    <h6>Support</h6>
                </div>
                <div className="navi-buttons">
                    <a href="" className="navi-button">Q&A</a>
                    <a href="" className="navi-button">DELIVERY</a>
                    <a href="" className="navi-button">RETURNS</a>
                    <a href="" className="navi-button">CONTACT US</a>
                </div>
            </div>
            <div className="category">
                <div className="category-head">
                    <h6>Follow us</h6>
                </div>
                <div className="navi-buttons">
                    <a href="" className="navi-button">INSTAGRAM</a>
                    <a href="" className="navi-button">FACEBOOK</a>
                   
                </div>
            </div>
            <form className="subscribe-form" onSubmit={handleSubmit}>
                <h6>Stay up-to-date</h6>
                <input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="figbutton">
                    <figcaption>
                        By subscribing, I agree with Privacy Policy of Jorgobe
                    </figcaption>
                    <button type="submit">SUBSCRIBE</button>

                </div>
                
            </form>
        </div>
        <div className="logo">
            <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className="terms">
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
            <a href=""> ©2023 Jorgobe</a>
        </div>

    </div>
  )
}
