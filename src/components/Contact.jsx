import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../darkcontext';

function Contact(props) {
    const formRef = useRef();
    const [send, setSend] = useState(false);
    const theme = useContext(ThemeContext);

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tzbjc1i', 'template_kz2jedl', formRef.current, 'RCwM0u2abnYX9l71H')
            .then((result) => {
                console.log(result.text);
                setSend(true);
                setTimeout(() => {
                    setSend(false);
                }, 5000);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1>Let's discuss <br /> your project</h1>
                    <div className="contact-info">
                        <div className="contact-tel">
                            <img src="/assets/tel.png" alt="Tel Icon" className="tel" />
                            +33 7 55 88 62 54
                        </div>
                        <div className="contact-mail">
                            <img src="/assets/email.png" alt="Email Icon" className="tel" />
                            merveillesagbeti@gmail.com
                        </div>
                        <div className="contact-place">
                            <img src="/assets/map.png" alt="Place Icon" className="tel" />
                            7 allée des sciences appliquées, Toulouse
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-intro">
                        <span style={{color: theme.state.darkMode && "white"}} className="contact-question">What's your story ? </span>
                        Get in touch. Always available for your projects. You have the right project? Come along me.
                    </div>
                    <form className='contact-form' ref={formRef} onSubmit={sendMail}>
                        <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="text" name="username" id="" className="form-name" placeholder='Your Name' />
                        <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="text" name="subject" id="" className="form-subject" placeholder='The Subject' />
                        <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="email" name="email" id="" className="form-email" placeholder='Your Email' />
                        <textarea style={{backgroundColor: theme.state.darkMode && "#333"}} name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                        <br />
                        <button style={{backgroundColor: theme.state.darkMode && "#333"}} type='submit' className='form-buttom'>Send</button>
                        {send && <div className='send-success'> Your message has been sent !!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;