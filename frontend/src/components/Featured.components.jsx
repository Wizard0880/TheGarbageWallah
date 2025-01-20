import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>Featured Services</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div className='cardcontainer relative w-1/2 h-[70vh]'>
            <h1 className='absolute text-[#CDEA68] left-full font-semibold -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-["Founders Grotesk"] tracking-tighter z-10'>
              {'GARBAGE'.split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-2xl overflow-hidden relative'>
              <div className='flex items-center mb-5 z-20'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h1 className='text-xl font-["Neue Montreal"] ml-3'>On-Door Pickup</h1>
              </div>
              <img
                className='h-full w-full rounded-xl'
                src='https://res.cloudinary.com/dz6i83ct2/image/upload/v1729482811/Featured1_yopn5e.jpg'
                alt='On-Door Pickup'
              />
            </div>
          </div>

          <div className='cardcontainer relative w-1/2 h-[70vh]'>
            <h1 className='absolute text-[#CDEA68] font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-["Founders Grotesk"] tracking-tighter z-10'>
              {'WALLAH'.split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-2xl overflow-hidden relative'>
              <div className='flex items-center mb-5 z-20'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h1 className='text-xl font-["Neue Montreal"] ml-3'>One Click Appointment</h1>
              </div>
              <img
                className='h-full w-full rounded-xl'
                src='https://res.cloudinary.com/dz6i83ct2/image/upload/v1729482812/Featured2.1_bcdywi.png'
                alt='One Click Appointment'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;