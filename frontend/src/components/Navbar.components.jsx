import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-10 py-5 font-["Neue Montreal"] flex justify-between items-center bg-zinc-900'>
      <div>
        <img
          src='https://res.cloudinary.com/dz6i83ct2/image/upload/v1729482811/TheGarbagewallah-fine-removebg-preview_1_njslop.png'
          className='w-30 h-16'
          alt='Logo'
        />
      </div>
      <div className='links flex gap-10'>
        {['Services', 'Our Work', 'Contact', 'Login', 'Sign Up'].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase().replace(' ', '-')}`}
            className={`text-lg capitalize font-light ${index === 4 && 'ml-32'}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;