import React from 'react'
import Link from 'next/link'


function About() {
  return (
    <section className='text-white flex flex-col h-screen' id='about'>
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

          <div className='flex justify-center items-center mt-4 space-x-2'>
            <Link href={'#skills'}>
              <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>Skills</span>
              </button>
            </Link>
            <button className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download CV</span>
            </button>
          </div>

          

      </div>
        
    </section>
  )
}

export default About