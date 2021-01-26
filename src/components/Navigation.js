import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='./' type='button' className='nav-button'>
          Home
        </Link>
        <Link to='./portfolio' type='button' className='nav-button'>
          Portfolio
        </Link>
        <Link to='./about' type='button' className='nav-button'>
          About
        </Link>
        <Link to='./blog' type='button' className='nav-button'>
          Blog
        </Link>
        <Link to='./contact' type='button' className='nav-button'>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navigation;
