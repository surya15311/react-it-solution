import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ITimage3 from "../assets/ITimage4.png";
import "../styles/Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_280ig8s', 'template_ztm2yho', form.current, {
        publicKey: 'tt7cU2rCfw6WCga-f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ITimage3})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="from_name" placeholder="Enter full name" type="text" />
          <label htmlFor="from_email">Email</label>
          <input name="email" placeholder="Enter email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
