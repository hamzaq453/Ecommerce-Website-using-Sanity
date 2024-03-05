import React from 'react';

function Footer() {
  return (
    <footer className="lg:flex lg:flex-row flex-col gap-5 justify-between px-8 py-6 border-t border-black mt-20">
      <p className="leading-7 lg:mt-0">
        Copyright © 2024 NextCommerce
      </p>
      <p className="leading-7 lg:mt-0">
        Design by. <span className='font-bold'> Hamza Qureshi</span>
      </p>
      <p className="leading-7 lg:mt-0">
        Code by. <span className='font-bold'>Hamza Qureshi</span> 
      </p>
    </footer>
  );
}

export default Footer;
