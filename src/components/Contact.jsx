import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useContent } from "../hooks/useContent";

import { ThemeContext } from "../darkcontext";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact(props) {
  const formRef = useRef();
  const [send, setSend] = useState(false);
  const theme = useContext(ThemeContext);
  const content = useContent();
  const { contact } = content;

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
            {contact.title} <br /> {contact.titleLine2}
          </h1>
          <div className="contact-info">
            <div className="contact-tel">
              <img src={contact.icons.phone} alt="Tel Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href={`tel:${contact.phone}`}
              >
                {contact.phone}
              </a>
            </div>
            <div className="contact-mail">
              <img src={contact.icons.email} alt="Email Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
            <div className="contact-place">
              <img src={contact.icons.location} alt="Place Icon" className="tel" />
              <a
                style={{ textDecoration: "none" }}
                href={contact.locationUrl}
              >
                {contact.location}
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
              {contact.intro.question}{" "}
            </span>
            {contact.intro.text}
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
              placeholder={contact.form.namePlaceholder}
            />
            {errors.username && errors.username.type === "required" && (
              <p>{contact.form.errors.nameRequired}</p>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <p>{contact.form.errors.nameMaxLength}</p>
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
              placeholder={contact.form.subjectPlaceholder}
            />
            {errors.subject && errors.subject.type === "required" && (
              <p>{contact.form.errors.subjectRequired}</p>
            )}
            {errors.subject && errors.subject.type === "maxLength" && (
              <p>{contact.form.errors.subjectMaxLength}</p>
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
              placeholder={contact.form.emailPlaceholder}
            />
            {errors.email && errors.email.type === "required" && (
              <p>{contact.form.errors.emailRequired}</p>
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
              placeholder={contact.form.messagePlaceholder}
            ></textarea>
            {errors.message && errors.message.type === "required" && (
              <p>{contact.form.errors.messageRequired}</p>
            )}
            <button
              style={{ backgroundColor: theme.state.darkMode && "#333" }}
              type="submit"
              className="form-buttom"
            >
              {contact.form.submitButton}
            </button>
            {send && (
              <div className="send-success">{contact.form.successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
