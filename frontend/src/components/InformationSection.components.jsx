import React from 'react';

function InformationSection() {
  const content = [
    'What you can expect:',
    'We send our pick-up guy at your location after you book an appointment for pickup of your scrap.',
    'We believe in work today for future ideology, so that our children can get fresh Air and Clean Earth to live.',
  ];

  const socialMedia = ['Instagram', 'Facebook', 'LinkedIn'];

  return (
    <div className='p-10 font-["Neue Montreal"] text-lg'>
      <div className='grid grid-cols-3 gap-10'>
        <div>
          {content.slice(0, 1).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='space-y-6'>
          {content.slice(1, 3).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='ml-[20vw]'>
          <p>S:</p>
          <div className='flex flex-col space-y-2'>
            {socialMedia.map((platform, index) => (
              <a
                key={index}
                href={`https://${platform.toLowerCase()}.com`}
                className='text-lg capitalize font-light underline'
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;