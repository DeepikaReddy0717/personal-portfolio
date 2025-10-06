import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      return toast.error("All fields are required.");
    }
    if (!validateEmail(email)) {
      return toast.error("Enter a valid email.");
    }

    setLoading(true);

    emailjs
  .send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      name: name,
      email: email,
      message: message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_API
  )

      .then(
        () => {
          setLoading(false);
          toast.success("Successfully sent email.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Let’s Chat</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let’s Talk!</h3>
          <p className="contact__details">
             I'm always open to new connections and conversations.  
  Whether it's a project, a question, or just a quick hello — feel free to reach out.  
  I believe great ideas start with a simple message.  
  Collaboration and learning excite me, and I'm here for both.  
  Let's make something cool together!
          </p>
        </div>

        <form onSubmit={submitHandler} className="contact__form" noValidate>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="name"
                value={form.name}
                type="text"
                className="contact__form-input"
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                name="email"
                value={form.email}
                type="email"
                className="contact__form-input"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              value={form.message}
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer position="bottom-right" theme={theme} />
      </div>
    </section>
  );
};

export default Contact;
