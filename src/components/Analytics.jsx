import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-gray-200 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ABOUT US</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A Leading Telecomms SBC</h1>
          <p>
            Omnicorn Solutions Limited is a seasoned multi-vendor Telecommunications, 
            Information Technology (IT) Solution design, Services support 
            and software solution provider in Africa.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
