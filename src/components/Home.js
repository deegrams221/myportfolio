import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>Diana Grams</h1>
          <h2 className='hero-subtitle'>Scrum Master, Client Manager, Web Developer</h2>
          <Link to='./portfolio' type='button' className='hero-button'>
            view portfolio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
