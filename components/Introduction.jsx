import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profilepicture from '../public/assets/img/foto-brent.jpg'

function Introduction() {
  return (
    <section id='introduction' className='h-screen  text-white flex flex-col items-center'>
        <div className='mt-5'>
            <Image className='pt-5 object-cover' layout='fixed' src={Profilepicture} width={300} height={350} alt="Picture of Brent" />
        </div>
        <div className='flex flex-col items-center text-center mt-4'>
            <span className='text-2xl text-gray-300'>WELCOME</span>
            <span className='text-3xl font-bold mt-3'>I'm Brent Broeckx</span>
            <span className='text-sm text-gray-300'>Student - Application Development</span>
            

            
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