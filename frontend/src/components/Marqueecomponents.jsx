import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='bg-zinc-900'>
      <div className='w-full py-10 rounded-[30px] bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-600 flex gap-10 overflow-hidden whitespace-nowrap'>
          {[...Array(3)].map((_, index) => (
            <motion.h1
              key={index}
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
              className='text-[12vw] leading-none font-["Founders_Grotesk "] font-semibold uppercase pt-8 mb-10'
            >
              The GarbageWallah
            </motion.h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;