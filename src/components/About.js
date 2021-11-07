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
            <h2>DevOps Scrum Master</h2>
            <p>I enjoy rock climbing, hiking, and yoga.</p>
            <p>
              I worked in special education and behavior therapy for 4 years.
              I'm a US Navy Veteran, have a Bachelors degree in Anthropology
              from{' '}
              <a href='https://www.csulb.edu/' target='_blank' rel='noreferrer'>
                California State University - Long Beach
              </a>
              , as well as an Associates degree in Liberal Arts: Social and
              Behavior Science from{' '}
              <a
                href='http://www.goldenwestcollege.edu/'
                target='_blank'
                rel='noreferrer'
              >
                Golden West College
              </a>
              .
            </p>
            <p>
              I have a Full Stack Web Development certification from{' '}
              <a
                href='https://lambdaschool.com/profiles/diana-grams'
                target='_blank'
                rel='noreferrer'
              >
                Lambda School
              </a>
              , and worked as a Team Lead for Lambda School's computer science
              unit for a year.
            </p>
            <p>
              I also have a Certified Project Officer certification from the{' '}
              <a href='https://institute.pm/' target='_blank' rel='noreferrer'>
                Institute of Project Management
              </a>{' '}
              and the{' '}
              <a href='https://bcert.me/swabmipym' target='_blank' rel='noreferrer'>
              Certified Scrum Master
              </a>{' '} certification from Scrum Alliance.
            </p>
            <p>My portfolio displays web development work I've done for a small aviary called K&B Aviary, and work I did for a non-profit called Furute Hope School in the Sky, as well as a fun project I did that pulls data from the NASA API.</p>
            <p>I currently work with an amazing team at Flexential Professional Services. I enjoy web development but I enjoy helping people even more, as a Scrum Master I get to do that everyday. In this position I also do client management, and occationally I get the chance to help debug code or assist with formatting too.</p>
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
