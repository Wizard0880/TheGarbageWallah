import React from 'react'
import InformationSection from './InformationSection'

function About() {
  return (
    <div className='bg-zinc-900'>
        <div className='w-full p-20 bg-[#CDEA68] rounded-3xl text-black'>
            <h1 className='font-["Neue Montreal"] text-[3vw] leading-[3 .6vw] tracking-tight'>TheGarbageWallah brings you a way to get relief from the scrap
                and kabad you have stored at your Home or Working Place.
            </h1>
            <div className='w-full flex  border-t-[1px] pt-10 mt-20 border-[#91a350]'>
                <InformationSection/>
            </div>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#91a350]'>
                 <div className='w-1/2'>
                <h1 className='text-6xl'>Our approach : </h1>
                <button className='flex uppercase gap-10 items-center px-6 py-3 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
                </div>
                <div className='w-1/2 h-[60vh]  rounded-2xl'>
                <img src='https://lh3.googleusercontent.com/drive-viewer/AKGpihbvuOGCinNMDwxNr-Q3y0eBEng6mhSacT5HfCUWGwLUu5cMJDVo2p94Vla9fCQlsNq0G8v_cbxwmnIxI49UDKAWgLBc9TYyrYs=s1600-rw-v1' className='rounded-2xl'></img>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default About