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
            className='contact-item'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Twitter} alt='Twitter Logo' />
          </a>
          <a
            href='https://github.com/deegrams221'
            className='contact-item'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Github} alt='Github Logo' />
          </a>
          <a
            href='https://www.linkedin.com/in/diana-grams/'
            className='contact-item'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedIn} alt='LinkedIn Logo' />
          </a>
        </div>
        <div className='contact-content'>
          <form
            method='post'
            action='https://formsubmit.co/deegrams221@gmail.com'
          >
            <div className='contact-form'>
              <div className='name-form'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                  minLength='6'
                />
              </div>
              <div className='email-form'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  minLength='6'
                />
              </div>
              <div className='message-form'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Message'
                  rows='5'
                  required
                  minLength='10'
                  maxLength='240'
                ></textarea>
              </div>
              <div className='message'>
                <input type='submit' value='Send Message' className='primary' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
