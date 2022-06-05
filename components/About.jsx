import React from 'react'
import Link from 'next/link'
import { Document } from 'react-pdf';


function About() {
  return (
    <section className='text-white h-[90vh] flex flex-col justify-center items-center' id='about'>
      <div className='flex flex-col justify-center items-center'>
          <span className='text-3xl text-center font-bold border-white w-max border-b-2'>Over mij</span>
          <div id='about-text' className='mt-3 text-center space-y-4'>
            <p>
              Mijn naam is Brent Broeckx. Ik ben een gemotiveerde Application Development student van Thomas More Geel.
            </p>
            <p>
              Dit jaar (Juni 2022) zal ik afstuderen en ben ik blij om eindelijk mijn kennis te kunnen gebruiken in de bedrijfswereld. Buiten IT ben ik ook graag bezig met gamen, airsoft en dieren.
            </p>
            <p>
              Je kan mijn CV bekijken voor meer informatie of verder lezen over mijn skills, projecten en stage hieronder.
            </p>
          </div>

          <div className='flex-col justify-center items-center mt-4 space-x-2'>
            <div className='flex space-x-2'>
              <button className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download CV</span>
              </button>
              <button className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Bekijk CV</span>
              </button>
            </div>
            <div className='mt-2 text-center'>
              <Link href={'#skills'}>
                <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>Skills</span>
                </button>
              </Link>
            </div>
            
          </div>

          

      </div>

      <Document file="/assets/cv.pdf" ></Document>
        
    </section>
  )
}

export default About