import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className='App'>Contact Us</h2>
      <div style={{display:"flex"}}>
      <div className="contact-info">
        <h3>Address</h3>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <h3>Phone</h3>
        <p>+1 (123) 456-7890</p>
        <h3>Email</h3>
        <p>info@springdale.edu</p>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
      <div className="map">
      <iframe
          src="https://www.google.com/maps/embed?origin=Springdale+Public+School,+123+Education+Lane,+Cityville,+State,+ZIP+Code"
          width="50%"
          height="300"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default ContactUs;