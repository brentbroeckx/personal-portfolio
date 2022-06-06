import {React, useEffect} from 'react'
import { useRouter } from 'next/router'
import projects from '../../components/projects.json'
import Link from 'next/link'


function Project() {
    
console.log("testing")
    const router = useRouter();
    const query = router.query;

    const project = projects.find((project) => project.id == query.id)


    var render = "";

    if (project != null) {
        if (project.voorbereidingsFase != null) {
            render = renderDetailedProject(project);
        } else {
            render = renderNormalProject(project);
        }
    }
   
    useEffect(() => {
        require('tw-elements')
    })

  return (
    <div className='pt-4 space-y-4 bg-gray-800 px-10 text-white'>

        <Link href={'/#projects'}>
            <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Terug</span>
            </button>
        </Link>
        
        
        {render}


        {project != null && 
        <div className='pb-8'>
            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">

                    {project.projectPictures.map((image, index) => {

                        var current = "false";
                        if (index == 0) current = "true";

                        return (
                        <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={current == "true" ? 'active' : ''}
                        aria-current={current}
                        aria-label={"Slide" + index}
                        ></button>
                        )

                        
                    })}
                </div>
                <div className="carousel-inner relative w-full overflow-hidden md:h-[700px] md:w-[100%]">
                    {project.projectPictures.map((image, index) => {

                        var classNames = "carousel-item relative float-left w-full ";

                        if (index == 0) {
                            classNames += "active ";
                        }

                        return <div key={index} className={classNames}>
                                    <img
                                    src={image}
                                    height="550px"
                                    className="block w-full object-cover"
                                    alt="..."
                                    />
                                </div>
                    })}


                    
                </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </div>
        
        }

        
    </div>
  )
}

function renderDetailedProject(project) {
    console.log(project)
    return (
        <div className='space-y-4 md:text-lg md:text-center'>
            <div className='md:flex md:flex-wrap md:space-y-4'>
                <div id="used-tools" className='md:w-[100%]'>
                    <span className='text-lg md:text-2xl font-bold underline text-orange-400'>Gebruikte tools</span>
                    <p>{project.usedTools}</p>
                </div>

                <div id='background-info' className='md:w-[50%]'>
                    <span className='text-lg md:text-2xl font-bold underline text-orange-400'>Achtergrond infromatie</span>
                    <p className='md:w-[75%] md:mx-auto'>{project.backgroundInfo}</p>
                </div>
                <div id='what' className='md:w-[50%]'>
                    <span className='text-lg md:text-2xl font-bold underline text-orange-400'>Wat?</span>
                    <p  className='md:w-[75%] md:mx-auto'>{project.what}</p>
                </div>
            </div>
            
            <div id='how'>
                <span className='text-lg md:text-2xl font-bold underline text-orange-400'>Hoe?</span>
                <div className='space-y-4'>
                    <div id='voorbereidingsfase' className='md:w-[50%] md:mx-auto'>
                        <span className='text-md font-bold'>Voorbereidingsfase</span>
                        <p>{project.voorbereidingsFase}</p>
                    </div>
                    <div id='conceptfase' className='md:w-[50%] md:mx-auto'>
                        <span className='text-md font-bold'>Conceptfase</span>
                        <p>{project.conceptFase}</p>
                    </div>
                    <div id='realisatiefase' className='md:w-[50%] md:mx-auto'>
                        <span className='text-md font-bold'>Realisatiefase</span>
                        <p>{project.realisatiefase}</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

function renderNormalProject() {


    

}


export default Project