import React from 'react'
import Language from './Language'
import SkillCircle from './SkillCircle'
import Study from './Study'

function Skills() {
  return (
    <section className='text-white flex flex-col mt-10 h-max space-y-8' id='skills'>
        <span className='text-3xl font-bold border-white text-center border-b-2 w-max mx-auto'>Skills</span>
        <div id='skill-details' >
            <div className='text-center space-y-2'>
              <span className='font-bold text-xl'>Frontend</span>
              <div className='text-sm space-y-2'>
                <p className='mb-2'>
                  HTML5 & CSS
                  <br />
                  TS, JS, JQuery, Angular, React, PHP
                  <br />
                  Bootstrap, TailwindCSS, Angular Material
                </p>
                <span className='font-bold'>Andere</span>
                <p>
                  SQL & NoSQL 
                  <br />
                   .NET Core, ASP.NET
                   <br />
                   Java Spring boot & Thymeleaf
                   <br />
                    Python
                </p>
              </div>
              
            </div>

            <div className='text-center mt-2 space-y-2'>
              <span className='font-bold text-xl'>Soft skills</span>
              <p className='text-sm'>
                Ik werk graag in team waarbij we samen projecten kunnen realiseren en kennis kunnen delen. Ondanks dat ik graag in team werk kan ik ook perfect zelfstandig werken.
                <br />
                <br />
                Ik ben sociaal en geef niet snel op bij problemen. Ik zal steeds doorzetten tot ik mijn doelen heb bereikt.
              </p>
            </div>

            <div className='text-center mt-2 space-y-2'>
              <span className='font-bold text-xl'>Vaardigheden</span>
              <div>
                <div className="flex justify-between mb-1" style={{width: 100 + "%"}}>
                    <span className="text-base font-medium text-white">HTML5 & CSS</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 100 + "%"}}></div>
                </div>

                <div className="flex justify-between mb-1 mt-2" style={{width: 90 + "%"}}>
                    <span className="text-base font-medium text-white">Angular</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 90 + "%"}}></div>
                </div>

                <div>
                <div className="flex justify-between mb-1 mt-2" style={{width: 90 + "%"}}>
                    <span className="text-base font-medium text-white">C#</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 90 + "%"}}></div>
                </div>

                <div className="flex justify-between mb-1 mt-2" style={{width: 75 + "%"}}>
                    <span className="text-base font-medium text-white">React</span>
                    <span className="text-sm font-medium text-white">Goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 75 + "%"}}></div>
                </div>


                <div className="flex justify-between mb-1 mt-2" style={{width: 75 + "%"}}>
                    <span className="text-base font-medium text-white">.NET Core</span>
                    <span className="text-sm font-medium text-white">Goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 75 + "%"}}></div>
                </div>


                <div className="flex justify-between mb-1 mt-2" style={{width: 65 + "%"}}>
                    <span className="text-base font-medium text-white">SQL</span>
                    <span className="text-sm font-medium text-white">Meer dan basis</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 65 + "%"}}></div>
                </div>

              </div>



                
              </div>
            </div>
        </div>




        <span className='text-2xl border-white border-b-2 w-max pb-2'>Language</span>
        <div id='languages' className='space-y-4'>
            <Language language="Nederlands" progress="Moedertaal" value="100" />
            <Language language="Engels" progress="Erg goed" value="85" />
        </div>

        <span className='text-2xl border-white border-b-2 w-max pb-2'>Studies</span>
        <div id='studies' className='space-y-4'>
            <Study school="Thomas More - Geel" degree="Bachelor Application Development" date="2019 - 2022" />
            <Study school="Campos - Turnhout" degree="Kantoor" date="2012 - 2019" />
        </div>
    </section>
  )
}

export default Skills