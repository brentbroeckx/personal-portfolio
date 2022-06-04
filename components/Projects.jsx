import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './projects.json'

function Projects() {
  return (
    <section className='text-white flex flex-col mt-10 h-max space-y-8' id='projects'>
        <span className='text-4xl font-bold mx-auto w-max'>Projects</span>
        <div id='project-showcase' className='flex flex-wrap justify-center space-y-4'>

            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })}

            {/* <ProjectCard name="Project 4.0" place="Thomas More - Geel" details="Lorem ipsum lorem ipsum" image="/assets/img/project-placeholder.png"/>
            <ProjectCard name="C# 3D Game Developer Course" place="Thomas More - Geel" details="Lorem ipsum lorem ipsum" image="/assets/img/creativity.jpg" />
            <ProjectCard name="Twitter Clone" place="Privé" details="Lorem ipsum lorem ipsum" image="/assets/img/creativity.jpg" />
            <ProjectCard name="Perseelbeheer" place="Privé" details="Lorem ipsum lorem ipsum" image="/assets/img/time-management.jpg" /> */}
        </div>
    
    </section>
  )
}

export default Projects