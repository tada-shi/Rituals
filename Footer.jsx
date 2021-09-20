import React from 'react';
import './Footer.css';
import{ FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <div className="upper">
                <div className="info">Subscribe for updates, exclusive promotions, and more.</div>
                <div className="links">
                <div className="mail">
                        <input type="email" name="email" id="emailId" placeholder="Enter Your email"/>
                        <button type="submit">subscribe</button>
                    </div>
                    <div className="social-media">
                        <p className="fb"><FaFacebookF/></p>
                        <p className="insta"><FaInstagram/></p>
                        <p className="pinterest"><FaPinterest/></p>
                        <p className="twitter"><FaTwitter/></p>
                        <p className="youtube"><FaYoutube/></p>
                    </div>
                </div>
                
            </div>
            <div className="lower">
                <p>	&#169; copyrights reserved</p>
            </div>
        </div>
    )
}
