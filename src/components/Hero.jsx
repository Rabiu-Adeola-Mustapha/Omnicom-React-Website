import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#32a36e] bg-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Omnicom Solutions Limited
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Welcom to Omnicom
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>
             Our core values are;
          </p>
          <Typed
          className='md:text-2xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Resourcefulness', 'Efficiency', 'Timeliness', 'Effectiveness', 'Partnership for life']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className='md:text-2xl text-l font-bold text-gray-500 tc-center mt-5'>
          <img src='' alt='' className='' />
          <p>
               Network Enginerring & Deployment | Network Performance management |
             Telecom Consulting & System Integration | Software & Test Solution Cloud Solutions |
                  Renewable Energy & Power Solution
          </p>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;
