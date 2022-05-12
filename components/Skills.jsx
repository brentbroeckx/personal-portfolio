import React from 'react'
import SkillCircle from './SkillCircle'

function Skills() {
  return (
    <section className='text-white flex flex-col mt-10 h-screen' id='skills'>
        <span className='text-5xl font-bold border-white border-b-2 w-max'>Skills</span>
        <div id='about-text' className='mt-3 '>
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
    </section>
  )
}

export default Skills