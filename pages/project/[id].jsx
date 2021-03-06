import {React, useEffect} from 'react'
import { useRouter } from 'next/router'
import projects from '../../components/projects.json'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../../components/Footer'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from '../../components/Carousel'

const styleStates = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: -100}
}

const reversedStyleState = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: 100}
}


function Project() {
    const router = useRouter();
    const query = router.query;

    const project = projects.find((project) => project.id == query.id)


    var render = "";
    var title = "";

    if (project != null) {
        if (project.voorbereidingsFase != null) {
            render = renderDetailedProject(project);
        } else {
            render = renderNormalProject(project);
        }

        title = project.title;
    }

  return (

    <>
        <div className='pt-4 space-y-4 bg-gray-800 px-10 pb-8 text-white'>
            <Head>
                <title>Portfolio - Brent Broeckx</title>
                <meta name="description" content="Brent Broeckx Portfolio website" />
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"></link>
            </Head>

            <Link href={'/#projects'}>
                <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span>Terug</span>
                </button>
            </Link>
            
            <p className='text-xl md:text-3xl font-bold underline text-orange-400 text-center'>{title}</p>
            
            {render}

        </div>

        <Footer />
    </>
  )
}

function renderDetailedProject(project) {
    return (
        <div className='space-y-4 md:text-lg text-center'>

            <div
                className='md:flex md:flex-wrap md:space-y-4'>

                <img src="/assets/img/usedtools.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
                <div id="used-tools" className='md:w-[100%]'>
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Gebruikte tools</p>
                    <p>{project.usedTools}</p>
                </div>

                <div id='background-info' className='md:w-[50%]'>
                    <img src="/assets/img/information.png" className='w-[300px] h-[200px] md:w-[350px] md:h-[250px] storytell mx-auto' alt="" />
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Achtergrond infromatie</p>
                    <p className='md:w-[75%] md:mx-auto'>{project.backgroundInfo}</p>
                </div>
                <div id='what' className='md:w-[50%]'>
                    <img src="/assets/img/what.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Wat?</p>
                    <p  className='md:w-[75%] md:mx-auto'>{project.what}</p>
                </div>
            </div>
            
            <div id='how'>
                <img src="/assets/img/questionmark.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />

                <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Hoe?</p>
                <div className='space-y-4'>
                    <div id='voorbereidingsfase' className='md:w-[50%] md:mx-auto'>
                        <p className='text-md font-bold'>Voorbereidingsfase</p>
                        <p>{project.voorbereidingsFase}</p>
                    </div>
                    <div id='conceptfase' className='md:w-[50%] md:mx-auto'>
                        <p className='text-md font-bold'>Conceptfase</p>
                        <p>{project.conceptFase}</p>
                    </div>
                    <div id='realisatiefase' className='md:w-[50%] md:mx-auto'>
                        <p className='text-md font-bold'>Realisatiefase</p>
                        <p>{project.realisatiefase}</p>
                    </div>

                    <div id='realisatiefase' className='md:w-[50%] md:mx-auto'>
                        <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Wat heb ik geleerd?</p>
                        <p>{project.learned}</p>
                    </div>
                </div>
                
            </div>

            <video className='mx-auto' width="800" height="400" controls>
                <source src={project.projectVideo} type="video/mp4" />
            </video>

            {project.projectPictures && 
                    <div>
                        <Carousel images={project.projectPictures} />
                    </div>
            }



        </div>
        
        
    )
}

function renderNormalProject(project) {
    return (
        <div className='space-y-4 md:text-lg text-center'>
            <div className='md:flex md:flex-wrap md:space-y-4'>
                <img src="/assets/img/usedtools.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
                <div id="used-tools" className='md:w-[100%]'>
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Gebruikte tools</p>
                    <p>{project.usedTools}</p>
                </div>

                <div id='background-info' className='md:w-[50%]'>
                    <img src="/assets/img/information.png" className='w-[300px] h-[200px] md:w-[350px] md:h-[250px] storytell mx-auto' alt="" />
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Achtergrond infromatie</p>
                    <p className='md:w-[75%] md:mx-auto'>{project.backgroundInfo}</p>
                </div>
                <div id='what' className='md:w-[50%]'>
                    <img src="/assets/img/what.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Wat?</p>
                    <p  className='md:w-[75%] md:mx-auto'>{project.what}</p>
                </div>
            </div>
            
            <div id='how'>
                <img src="/assets/img/questionmark.png" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />

                <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Hoe?</p>
                <p className='md:w-[60%] mx-auto mb-4'>{project.how}</p>


                {project.title1 != null && 
                    <div className='space-y-4'>
                        <div id='titel1' className='md:w-[50%] md:mx-auto'>
                            <p className='text-md font-bold'>{project.title1}</p>
                            <p>{project.title1Text}</p>
                            <video className='mx-auto mt-4' width="800" height="400" controls>
                                <source src={project.title1Video} type="video/mp4" />
                            </video>
                            <a target="_blank" href="https://brentbroeckx.github.io/Game-Dev-Project-Boost/" rel="noreferrer">
                                <button className="w-max mt-2 bg-orange-400 hover:bg-orange-500 text-gray-800 py-2 px-4 rounded items-center">
                                    <span> <i className='icon-game-controller'></i> Speel {project.title1}</span>
                                </button>
                            </a>
                        </div>
                        <div id='titel2' className='md:w-[50%] md:mx-auto'>
                            <p className='text-md font-bold'>{project.title2}</p>
                            <p>{project.title2Text}</p>
                            <video className='mx-auto mt-4' width="800" height="400" controls>
                                <source src={project.title2Video} type="video/mp4" />
                            </video>
                        </div>
                        <div id='titel3' className='md:w-[50%] md:mx-auto'>
                            <p className='text-md font-bold'>{project.title3}</p>
                            <p>{project.title3Text}</p>
                            <video className='mx-auto mt-4' width="800" height="400" controls>
                                <source src={project.title3Video} type="video/mp4" />
                            </video>
                        </div>
                        <div id='titel4' className='md:w-[50%] md:mx-auto'>
                            <p className='text-md font-bold'>{project.title4}</p>
                            <p>{project.title4Text}</p>
                            <video className='mx-auto mt-4' width="800" height="400" controls>
                                <source src={project.title4Video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                }

                {project.learned != null && 
                <div id='realisatiefase' className='md:w-[50%] md:mx-auto'>
                    <p className='text-lg md:text-2xl font-bold underline text-orange-400'>Wat heb ik geleerd?</p>
                    <p>{project.learned}</p>
                </div>
                }

                <div className='space-y-4'>
                    {project.projectVideos.map((video, index) => {
                        return (
                                <video key={index} className='mx-auto' width="800" height="400" controls>
                                    <source src={video} type="video/mp4" />
                                </video>
                            )
                        }) 
                    }
                </div>

                {project.projectPictures && 
                    <div className='mt-4'>
                        <Carousel images={project.projectPictures} />
                    </div>
                }

            </div>
        </div>
        
    )
    

}


export default Project