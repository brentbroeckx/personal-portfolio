import React from 'react'
import Language from './Language'
import SkillCircle from './SkillCircle'
import Study from './Study'

function Skills() {
  return (
    <section className='text-white flex flex-col mt-10 h-screen space-y-8' id='skills'>
        <span className='text-5xl font-bold border-white border-t-2 w-max'>Skills</span>
        <div id='skill-circles'>
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
            <SkillCircle />
        </div>

        <span className='text-4xl border-white border-b-2 w-max pb-2'>Language</span>
        <div id='languages' className='space-y-4'>
            <Language />
            <Language />
        </div>

        <span className='text-4xl border-white border-b-2 w-max pb-2'>Studies</span>
        <div id='studies' className='space-y-4'>
            <Study />
            <Study />
        </div>
    </section>
  )
}

export default Skills