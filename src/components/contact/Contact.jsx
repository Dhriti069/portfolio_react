import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dhritidas225</h5>
            <a href="mailto:dhritidas225@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>dhritidas</h5>
            <a href="https://m.me/dhritidas" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6370426985</h5>
            <a href="https://api.whatsapp.com/send?/phone+1234567891" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default contact
