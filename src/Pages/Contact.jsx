import React from 'react'

import '../styles/Contact.css'


export default function About() {
  return (
    <>
    <div className="contact-card">
      <h2>Contact Me</h2>
      <div className="input-group">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
      </div>
      <div className="input-group">
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
      </div>
      <button className="submit-button">Submit</button>
    </div>
    </>
  )
}
