import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-10 py-5 font-["Neue Montreal"] flex justify-between items-center'>
        <div> 
            <img src='https://lh3.googleusercontent.com/drive-viewer/AKGpihZfDeeklX5t8_inm46uTtW5jADKtnjY4PFBfuCswTF9RsgTxxBYQSvw3V2UlmgZf01ke_5HLco2eERZ6-GHpaV2Rs3bKfWAbSE=s2560' className='w-30 h-16'>
            </img>
        </div>
        <div className= "links flex gap-10">
            {['Services',"Our Work", "About Us" ,"Insights","Contact"].map((item,index)=>(
                <a key={index} className={`text-lg capitalize font-light ${index ===4 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar; 