import React from 'react'
import { useRouter } from 'next/router'
import projects from '../../components/projects.json'

function Project() {
    const router = useRouter();
    const query = router.query;

    const project = projects.find((project) => project.id == query.id)
    console.log(project)

  return (
    <div className='text-center mt-4 space-y-4'>
        <div id='background-info'>
            <span className='text-lg font-bold'>Achtergrond infromatie</span>
            <p>{project.backgroundInfo}</p>
        </div>
        <div id='what'>
            <span className='text-lg font-bold'>wat?</span>
            <p>{project.what}</p>
        </div>
        <div id='how'>
            <span className='text-lg font-bold'>Hoe?</span>
            <div id='voorbereidingsfase'>
                <span className='text-md font-bold'>Voorbereidingsfase</span>
                <p>{project.voorbereidingsFase}</p>
            </div>
            <div id='conceptfase'>
                <span className='text-md font-bold'>Conceptfase</span>
                <p>{project.conceptFase}</p>
            </div>
            <div id='realisatiefase'>
                <span className='text-md font-bold'>Realisatiefase</span>
                <p>{project.realisatiefase}</p>
            </div>
        </div>
        


    </div>
  )
}

export default Project