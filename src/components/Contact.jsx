import React, { useContext, useEffect, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../darkcontext';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    
    useEffect(() => {
        AOS.init({duration: 2000});
    },[])

    return (
        <div className='contact' data-aos = "fade-up">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1>Let's discuss <br /> your project</h1>
                    <div className="contact-info">
                        <div className="contact-tel">
                            <img src="/assets/tel.png" alt="Tel Icon" className="tel" />
                            <a style={{textDecoration:"none"}} href="tel:+33 7 55 88 62 54">+33 7 55 88 62 54</a>
                        </div>
                        <div className="contact-mail">
                            <img src="/assets/email.png" alt="Email Icon" className="tel" />
                            <a style={{textDecoration:"none"}} href="mailto:merveillesagbeti@gmail.com">merveillesagbeti@gmail.com</a>
                        </div>
                        <div className="contact-place">
                            <img src="/assets/map.png" alt="Place Icon" className="tel" />
                            <a style={{textDecoration:"none"}} href="https://www.google.com/maps/place/7+All.+des+sciences+Appliqu%C3%A9es,+31400+Toulouse/@43.5708332,1.4671979,17z/data=!3m1!4b1!4m5!3m4!1s0x12aebc4764903479:0xfaa767a39da5780!8m2!3d43.5708332!4d1.4693866">7 allée des sciences appliquées, Toulouse</a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-intro">
                        <span style={{color: theme.state.darkMode && "white"}} className="contact-question">What's your story ? </span>
                        Get in touch. Always available for your projects. You have the right project? Come along me.
                    </div>
                    <form className='contact-form' ref={formRef} onSubmit={sendMail}>
                        <input style={{backgroundColor: theme.state.darkMode && "#333", color: theme.state.darkMode && "white"}} type="text" name="username" id="" className="form-name" placeholder='Your Name' />
                        <input style={{backgroundColor: theme.state.darkMode && "#333", color: theme.state.darkMode && "white"}} type="text" name="subject" id="" className="form-subject" placeholder='The Subject' />
                        <input style={{backgroundColor: theme.state.darkMode && "#333", color: theme.state.darkMode && "white"}} type="email" name="email" id="" className="form-email" placeholder='Your Email' />
                        <textarea style={{backgroundColor: theme.state.darkMode && "#333", color: theme.state.darkMode && "white"}} name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                        <button style={{backgroundColor: theme.state.darkMode && "#333"}} type='submit' className='form-buttom'>Send</button>
                        {send && <div className='send-success'> Your message has been sent !!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;