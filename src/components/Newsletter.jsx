import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Trusted by
          </h1>
          <p>Partners company logo</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
           
          </div>
          <p>
            
            We are motivated by our <span className='text-[#00df9a]'>MISSION</span> to provide <span className='text-[#00df9a]'>QUALITY</span> products, awesome <span className='text-[#00df9a]'>SERVICES</span> at verry <span className='text-[#00df9a]'>AFFORDABLE</span> price.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
