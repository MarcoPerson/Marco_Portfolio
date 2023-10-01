import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import { ThemeContext } from "../darkcontext";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact(props) {
  const formRef = useRef();
  const [send, setSend] = useState(false);
  const theme = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField
  } = useForm();

  const sendMail = (e) => {
    emailjs
      .sendForm(
        "service_tzbjc1i",
        "template_kz2jedl",
        formRef.current,
        "RCwM0u2abnYX9l71H"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
          setTimeout(() => {
            setSend(false);
          }, 5000);
          
          resetField("username");
          resetField("subject");
          resetField("email");
          resetField("message");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="contact" data-aos="fade-up">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1>
            Let's discuss <br /> your project
          </h1>
          <div className="contact-info">
            <div className="contact-tel">
              <img src="/assets/tel.png" alt="Tel Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href="tel:+33 7 55 88 62 54"
              >
                +33 7 55 88 62 54
              </a>
            </div>
            <div className="contact-mail">
              <img src="/assets/email.png" alt="Email Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href="mailto:merveillesagbeti@gmail.com"
              >
                merveillesagbeti@gmail.com
              </a>
            </div>
            <div className="contact-place">
              <img src="/assets/map.png" alt="Place Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href="https://maps.app.goo.gl/XrBVmap73c1kBm9XA"
              >
                7 Allée des Sciences Appliquées, Toulouse
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-intro">
            <span
              style={{ color: theme.state.darkMode && "white" }}
              className="contact-question"
            >
              What's your story ?{" "}
            </span>
            Get in touch. Always available for your projects. You have the right
            project? Come along me.
          </div>
          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit(sendMail)}
          >
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="text"
              {...register("username", { required: true, maxLength: 30 })}
              name="username"
              id="U"
              className="form-name"
              placeholder="Your Name"
            />
            {errors.username && errors.username.type === "required" && (
              <p>Name is required</p>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <p>Max length exceeded</p>
            )}
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="text"
              {...register("subject", { required: true, maxLength: 30 })}
              name="subject"
              id="S"
              className="form-subject"
              placeholder="The Subject"
            />
            {errors.subject && errors.subject.type === "required" && (
              <p>Subject is required</p>
            )}
            {errors.subject && errors.subject.type === "maxLength" && (
              <p>Max length exceeded</p>
            )}
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              type="email"
              {...register("email", { required: true })}
              name="email"
              id="E"
              className="form-email"
              placeholder="Your Email"
            />
            {errors.email && errors.email.type === "required" && (
              <p>Email is required</p>
            )}
            <textarea
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
              }}
              {...register("message", { required: true })}
              name="message"
              id="M"
              cols="30"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            {errors.message && errors.message.type === "required" && (
              <p>A message is required</p>
            )}
            <button
              style={{ backgroundColor: theme.state.darkMode && "#333" }}
              type="submit"
              className="form-buttom"
            >
              Send
            </button>
            {send && (
              <div className="send-success"> Your message has been sent !!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
