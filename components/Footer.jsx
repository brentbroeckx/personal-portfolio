import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-700 shadow-inner py-10 flex flex-col items-center text-white space-y-2' id='footer'>
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/brent-broeckx-6b22181b8/">
            <button className='w-16 h-16 rounded-full bg-blue-500'>
                <i className='icon-social-linkedin text-2xl'></i>
            </button>
        </a>
        <p className='text-sm text-gray-400'>Copyright © Brent Broeckx 2022</p>
    </div>
  )
}

export default Footer