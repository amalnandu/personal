import React, { useState } from 'react';
import '../styles/contact_me.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-me">
      <h2 className="contact-me-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-me-form">
        <label className="contact-me-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-me-input"
            required
          />
        </label>
        <label className="contact-me-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-me-input"
            required
          />
        </label>
        <label className="contact-me-label">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-me-textarea"
            required
          />
        </label>
        <button type="submit" className="contact-me-button">Send Message</button>
      </form>
      <div className="contact-me-links">
        <h3>Find me on:</h3>
        <ul className="contact-me-link-list">
          <li>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-me-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:your-email@example.com" className="contact-me-link">
              Email
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-me-link">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-me-link">
              HackerRank
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
