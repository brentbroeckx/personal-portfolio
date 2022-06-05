import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './projects.json'

function Projects() {
  return (
    <section className='text-white  flex flex-col mt-10 h-max space-y-8' id='projects'>
        <span className='text-4xl font-bold mx-auto w-max'>Projects</span>
        <div id='project-showcase' className='flex flex-wrap justify-center space-y-4'>

            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })}
        </div>
    
    </section>
  )
}

export default Projects