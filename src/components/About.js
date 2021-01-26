import React from 'react';
import Beach from '../images/beach.jpg';
import MeImg from '../images/me-close.png';
import MeHike from '../images/me-hike.jpg';
import MeNavy from '../images/me-navy.jpg';
import MeRock from '../images/me-rock.jpg';
import Pumpkin from '../images/Pumpkin-9.png';
import Snow from '../images/snow.jpg';
import Navigation from './Navigation';

const About = () => {
  return (
    <>
      <div className='about'>
        <Navigation />
        <div className='about-header'>
          <h1>About</h1>
        </div>
        <div className='about-content'>
          <img src={MeImg} alt='Diana Grams' />
          <div className='about-description'>
            <h1>Diana Grams</h1>
            <h2>Owner of DG Web Consulting</h2>
            <h3>Web Developer</h3>
            <p>
              I enjoy rock climbing, hiking, and yoga. I worked in special
              education and behavior therapy for 4 years. I'm a US Navy Veteran,
              have an Associates degree in Liberal Arts: Social and Behavior
              Science, as well as a Bachelors degree is Anthropology. I recently
              completed the Full Stack Web Development program at -
              <a
                href='https://lambdaschool.com/profiles/diana-grams'
                target='_blank'
                rel='noreferrer'
              >
                Lambda School
              </a>
              , and worked as a Team Lead for Lambda School's computer science
              unit for a year. I love helping people and I think technology is a
              great way to do that.
            </p>
          </div>
        </div>

        <div className='about-images'>
          <img className='about-img' src={Beach} alt='The Beach' />
          <img
            className='about-img'
            src={MeNavy}
            alt='Diana Grams in uniform'
          />
          <img className='about-img' src={Pumpkin} alt='Dog named Pumpkin' />
          <img className='about-img' src={MeHike} alt='View of the river' />
          <img
            className='about-img'
            src={MeRock}
            alt='Diana Grams rock climbing'
          />
          <img className='about-img' src={Snow} alt='Snow and trees' />
        </div>
      </div>
    </>
  );
};

export default About;
