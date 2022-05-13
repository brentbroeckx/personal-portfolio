import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import placeholder from '../public/assets/img/default-placeholder.png'

function Introduction() {
  return (
    <section id='introduction' className='h-screen text-white flex flex-col items-center'>
        <div className='mt-5'>
            <Image className='pt-5' layout='fixed' src={placeholder} width={300} height={350} alt="Picture of Brent" />
        </div>
        <div className='flex flex-col items-center mt-4'>
            <span className='text-2xl text-gray-300'>WELCOME</span>
            <span className='text-4xl font-bold mt-3'>I'm Brent Broeckx</span>
            <span className='text-sm text-gray-300'>Student - Application Development</span>
            <button className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 mt-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download CV</span>
            </button>

            
        </div>
        <div className='h-full mt-10'>
            <Link href={'#about'}>
            <svg className='animate-bounce h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            </Link>
            
        </div>
        
    </section>
  )
}

export default Introduction