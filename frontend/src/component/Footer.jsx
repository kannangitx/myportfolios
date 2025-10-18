
import './Footer.css';
import React from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
        <div className="container1">
        <div className="row" id='nm'>
          <div className="footer-col">
            <h4>company</h4>
            <hr className='jh'/>
            <div className='kannan'>
              <li className='k' id='kamal'><a href=".main">ABOUT</a></li>
              <li  className='k'><a href=".main">Developer</a></li>
              <li  className='k'><a href=".main">Designer</a></li>
              <li  className='k'><a href=".main">privacy policy</a></li>
            </div>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <hr className='jh'/>
            <div className='kannan'>
              <li className='k'><a href=".main">FAQ</a></li>
              <li className='k'><a href=".main">DEVOPS</a></li>
              <li className='k'><a href=".main">Designer</a></li>
              <li className='k'><a href=".main">Host</a></li>
              <li className='k'><a href=".main">Cloud Services</a></li>
            </div>
          </div>
          <div className="footer-col">
            <h4> Our Teams</h4>
            <hr className='jh'/>
            <div className='kannan'>
              <li className='k'><a href=".main">GitHub</a></li>
              <li className='k'><a href=".main">Behance</a></li>
              <li className='k'><a href=".main">Whatsapp</a></li>
              <li className='k'><a href=".main" className='not'>Telegram</a></li>
            </div>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
            <a href=".main">
        <FontAwesomeIcon icon={faFacebookF}  />
      </a>
      <a href=".main">
        <FontAwesomeIcon icon={faTwitter}  />
      </a>
      <a href=".main">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>
      <a href=".main">
        <FontAwesomeIcon icon={faLinkedinIn}  />
      </a>
            </div>
          </div>
        </div>
      </div>
     
    <div className='bio'>
      <hr className='li23'/>
    <div className='bio1'> Copyright © 2024 All rights reserved  |  This Site is made with ❤️  by Kamalakannan </div>
    </div>
    </footer>
  );
}
export default Footer;