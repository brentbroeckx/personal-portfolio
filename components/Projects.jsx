import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './projects.json'

function Projects() {
  return (
    <section className='text-white flex flex-col mt-10 h-max space-y-8' id='projects'>
        <span className='text-4xl font-bold mx-auto w-max'>Projecten</span>
        <div id='project-showcase' className='gap-4 grid grid-cols-1 mx-auto md:grid-cols-2'>

            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })}
        </div>
    
    </section>
  )
}

export default Projects