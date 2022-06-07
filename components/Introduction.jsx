import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profilepicture from '../public/assets/img/foto-brent.jpg'

function Introduction() {
  return (
    <section id='introduction' className='h-[93vh] pt-8 md:px-10 text-white flex flex-col items-center md:flex-row md:justify-around'>
        <div className='mt-5 md:order-2'>
            <img src="assets/img/foto-brent.jpg" className='w-[250px] sm:w-[350px] md:w-[600px]' alt="" />
        </div>
        <div className='flex flex-col h-full md:h-max items-center md:items-start md:space-y-4 mt-4 md:order-1 '>
            <span className='text-2xl md:text-4xl text-gray-300'>WELKOM</span>
            <span className='text-3xl text-center md:text-left md:text-5xl font-bold mt-3'>Ik ben Brent Broeckx</span>
            <span className='text-sm md:text-lg text-orange-400'>Student - Application Development</span>
            
            <div className='mt-4 space-x-2  md:ml-[40%]'>
              <div className='h-full mt-10 flex items-center justify-center mx-auto'>
                <Link href={'#about'}>
                <svg className='animate-bounce h-6 w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </Link>
                
              </div>
            
          </div>
            
          
        </div>
        
    </section>
  )
}

export default Introduction