import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className='text-white flex flex-col mt-10 h-max space-y-8' id='projects'>
        <span className='text-4xl font-bold mx-auto w-max'>Projects</span>
        <div id='project-showcase' className='flex flex-wrap justify-center space-y-4'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    
    </section>
  )
}

export default Projects