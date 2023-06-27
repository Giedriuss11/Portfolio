import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsMessenger} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contant = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_23oizy7', 'template_vpjb7ff', form.current, 'pZLJKOxoszhO42evB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMailOpen className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>giedriuss114@gmail.com</h5>
            <a href="mailto:giedriuss114@gmail.com" target='_black'>Sent a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Giedrius Alisaukas</h5>
            <a href="https://m.me/giedrius.alisauskas.1" target='_black'>Sent a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contant