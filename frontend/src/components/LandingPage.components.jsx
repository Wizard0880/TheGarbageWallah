import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textStructure mt-32 px-20'>
        {['We Create', 'Solution', 'For Garbage'].map((item, index) => (
          <div key={index} className='masker'>
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <div className='mr-5 w-[9vw] rounded-md h-[5vw] bg-green-500 relative bottom-[0.2vw]'></div>
              )}
              <h1 className='-mb-[1vw] uppercase text-[5.86vw] leading-[8vw] font-["Founders_Grotesk"] font-bold'>
                {item}
              </h1>
            </div>
          </div>
        ))}

        <div className='border-t-[1px] border-zinc-700 mt-32 py-5 px-20 flex justify-between items-center'>
          {['From Your Home', 'From Your Industries'].map((item, index) => (
            <p key={index} className='text-md font-light tracking-tight leading-none'>
              {item}
            </p>
          ))}
          <div className='start flex items-center gap-5'>
            <Link
              to='/book-pickup'
              className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase'
            >
              Book a Pick-up
            </Link>
            <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;