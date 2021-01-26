import React from 'react';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import Navigation from './Navigation';

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <Navigation />
        <div className='contact-header'>
          <h1>contact</h1>
        </div>
        <div className='contact-links'>
          <a
            href='https://twitter.com/deegrams221'
            class='contact-item'
            target='_blank'
          >
            <img src={Twitter} />
          </a>
          <a
            href='https://github.com/deegrams221'
            class='contact-item'
            target='_blank'
          >
            <img src={Github} />
          </a>
          <a
            href='https://www.linkedin.com/in/diana-grams/'
            class='contact-item'
            target='_blank'
          >
            <img src={LinkedIn} />
          </a>
        </div>
        <div className='contact-content'>
          <form
            method='post'
            action='https://formsubmit.co/deegrams221@gmail.com'
          >
            <div class='contact-form'>
              <div class='name-form'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                  minlength='6'
                />
              </div>
              <div class='email-form'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  minlength='6'
                />
              </div>
              <div class='message-form'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Message'
                  rows='5'
                  required
                  minlength='10'
                  maxlength='240'
                ></textarea>
              </div>
              <div class='message'>
                <input type='submit' value='Send Message' class='primary' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
