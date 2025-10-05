import React, { useState } from "react";
import './Contact.css';
import newr from './new.png';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false); // success alert state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', form); // no unused var
      setForm({ name: '', email: '', contactNo: '', message: '' });

      // Show success alert
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // hide after 3 seconds

    } catch(err) {
      console.log(err);
      alert('Something went wrong!');
    }
  }

  return (
    <div className="main871" id="pop">
      <div id="imag"><img src={newr} alt="imag"/></div>

      <div className="screen-body" id="m_s">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
        </div>

        <div className="screen-body-item">
          <form className="app-form" onSubmit={handleSubmit}>
            
            <div className="app-form-group">
              <input 
                className="app-form-control" 
                placeholder="NAME" 
                name="name"
                value={form.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="app-form-group">
              <input 
                className="app-form-control" 
                placeholder="EMAIL" 
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="app-form-group">
              <input 
                className="app-form-control" 
                placeholder="CONTACT NO" 
                name="contactNo"
                value={form.contactNo}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="app-form-group message">
              <input 
                className="app-form-control" 
                placeholder="MESSAGE" 
                name="message"
                value={form.message}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="app-form-group buttons">
              <button type="reset" className="app-form-button" id="ntr">CANCEL</button>
              <button type="submit" className="app-form-button" id="ntr1">SEND</button>
            </div>
          </form>

          {/* Success Alert Box */}
          {showAlert && (
            <div className="success-alert">
              Form submitted successfully!
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Contact;
