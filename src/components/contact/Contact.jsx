import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_2bq27ol', 
            'template_rycui2i', 
            form.current, {
            publicKey: 'U019BSW4YCSDjaC1r',
             })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">Gesonks26@gmail.com</span>

                        <a href="mailto:gesonks26@gmail.com" className="contact__button">Write Me<i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">365-883-4642</span>

                        <a href="https://wa.me/13658834642?text=Hello,%20Geson" className="contact__button">Write Me<i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">Geson Kachappilly</span>

                        <a href="https://m.me/GesonKachappilly" className="contact__button">Write Me<i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>

                </div>    
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write a message to me</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            className="contact__form-input" placeholder="Insert your name" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input 
                            type="email"
                            name="email" 
                            className="contact__form-input" placeholder="Insert your Email" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Subject</label>
                        <textarea 
                            name="subject" 
                            cols="30" rows="10" className="contact__form-input" 
                            placeholder="Write your subject"></textarea>
                    </div>

                    <button className="button button--flex">
                        Send Message
                        <svg 
                            className="prefix__button__icon" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24"
                            height="24" 
                            fill="none">
                            <path d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81zm-6.58-14.6c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77.72 0 1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45-.65-.65-1.91-.73-3.44-.22l-8.49 2.84z" fill='var(--container-color)'/>
                            <path d="M10.11 14.705c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.58-3.59c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22z" fill="var(--container-color)"/>
                        </svg>
                    </button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact