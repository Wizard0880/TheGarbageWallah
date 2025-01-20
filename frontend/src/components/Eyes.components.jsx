import React, { useState, useEffect } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className='eyes w-full h-screen overflow-hidden rounded-3xl'>
      <div
        className='relative w-full h-full bg-cover bg-center'
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dz6i83ct2/image/upload/v1729482811/Top-View_nzhdid.jpg")',
        }}
      >
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;