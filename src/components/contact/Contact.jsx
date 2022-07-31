import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gfba88f', 'template_o1x07b9', form.current, '8obdTQgYJucylD3_a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setFullName('')
    setEmail('')
    setMessage('')
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bookingtaha98@gmail.com</h5>
            <a href="mailto:bookingtaha98@gmail.com" target="_blank">Send an email</a>
          </article>
        </div>
        {/**END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input onChange={(e) => {
            setFullName(e.target.value);
          }} value={fullName} type="text" name="name" placeholder='Your Full Name' required/>
          <input onChange={(e) => {
            setEmail(e.target.value);
          }} value={email} type="email" name="email" placeholder='Your Email' required/>
          <textarea onChange={(e) => {
            setMessage(e.target.value);
          }} value={message} name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact