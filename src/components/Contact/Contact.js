import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-text">
        <h2>Get in Touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis nisi sed placerat
          feugiat. Sed sed magna ullamcorper, tincidunt nulla tincidunt, finibus libero.
        </p>
      </div>
      <form action="https://formspree.io/f/xaygknwo" method="POST">
        <label for="name">Name:</label>
        <input id="name" placeholder="Enter your name" name="name" required></input>

        <label for="email">Email:</label>
        <input id="email" type="email" placeholder="Enter your email" name="email" required></input>

        <label for="message">Message:</label>
        <textarea id="message" placeholder="Enter your message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
