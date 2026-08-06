import "./Contact.css";
import { useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";

function Contact() {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    subject: "",

    message: "",

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Backend will be connected later 🚀");

  };

  return (

    <section className="contact" id="contact">

      <div className="contact-heading">

        <p>Ready to Build Something Amazing?</p>

        <h2>

          Let's Build Something

          <span> Amazing Together.</span>

        </h2>

        <p>

          I'm actively looking for Java Full Stack Developer opportunities.
          Have a project or opportunity? Feel free to reach out.

        </p>

      </div>

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <div className="info-card">

            <FaEnvelope className="info-icon"/>

            <div>

              <h4>Email</h4>

              <p>prajjwalrathi9@gmail.com</p>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt className="info-icon"/>

            <div>

              <h4>Phone</h4>

              <p>+91 78190 55192</p>

            </div>

          </div>

          <div className="info-card">

            <IoLocationSharp className="info-icon"/>

            <div>

              <h4>Location</h4>

              <p>Noida, Uttar Pradesh</p>

            </div>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Rathi2024"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub/>

            </a>

            <a
              href="https://www.linkedin.com/in/prajjwal-rathi-bb6956266/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin/>

            </a>

          </div>

        </div>

        {/* RIGHT */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        > 
        <h3>Send Me a Message</h3>

        <p className="form-subtitle">
           Fill out the form below and I'll get back to you as soon as possible.
        </p>

          <input

            type="text"

            name="name"

            placeholder="Your Name"

            value={formData.name}

            onChange={handleChange}

            required

          />

          <input

            type="email"

            name="email"

            placeholder="Your Email"

            value={formData.email}

            onChange={handleChange}

            required

          />

          <input

            type="text"

            name="subject"

            placeholder="Subject"

            value={formData.subject}

            onChange={handleChange}

            required

          />

          <textarea

            rows="6"

            name="message"

            placeholder="Your Message"

            value={formData.message}

            onChange={handleChange}

            required

          />

          <button type="submit">

            Send Message

          </button>
          <p className="form-note">
            ⚡ Usually replies within 24 hours.
          </p>

        </form>

      </div>

    </section>

  );

}

export default Contact;