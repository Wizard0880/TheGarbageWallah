import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'> Featured Services</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
            
          <div className="cardcontainer relative w-1/2 h-[70vh] ">
          <h1 className='absolute text-[#CDEA68] font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl font-["Founders Grotesk"] tracking-tighter z-10'>
            {/* {"HELLO".split('').map((item,index) => (
              <span >{item}</span>
              ))} */}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden relative">
              <div className='flex items-center mb-5 z-20'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h1 className='text-xl font-["Neue Montreal"] ml-3'>On-Door Pickup</h1>
              </div>
              <img className='h-full w-full rounded-xl' src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZ9McW5BxijFV9DsOAdMZRcZtd2bLgyx9P7t-719DBIsonNCWRf37xehvAeC-TWYvA-q_LvAqMg4rp264bh3_xg13fjf-opaw=s1600-rw-v1" style={{ filter: 'none', zIndex: 0 }} />
            </div>
          </div>
          
          <div className="cardcontainer relative w-1/2 h-[70vh]">
        
            <div className="card w-full h-full rounded-2xl overflow-hidden relative">
            <h1 className='absolute text-[#CDEA68] font-semibold right-full translate-x-3/4 top-1/2 -translate-y-1/2 text-9xl font-["Founders Grotesk"] tracking-tighter z-10'>
            {"SURU".split('').map((item,index) => (
              <span >{item}</span>
              ))}
            </h1>
              <div className='flex items-center mb-5 z-20'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h1 className='text-xl font-["Neue Montreal"] ml-3'>One Click Appointment</h1>
              </div>
              <img className='h-full w-full rounded-xl' src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZkWCGudmRzyyTj8J9SphnYBJtkjtVVJvngo623JxtH_5OV3nNzNBefRtWHz1XxhlqLDZFf0722QlU52WGAvVV-NXZwe2F68LM=s2560" style={{ filter: 'none', zIndex: 0 }} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
