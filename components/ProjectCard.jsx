import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const styleStates = {
  visible: {scale: 1, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, scale: 0, transition: {duration: 1}}
}
function ProjectCard(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const navigate = useRouter();

    useEffect(() => {

        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    
    }, [controls,inView]);

    const truncate = (str) => {
        if (str == null) return;
        return str.length > 10 ? str.substring(0, 125) + "..." : str;
    }

    const routeToProject = (id) => {
        var url = "/project/" + id
        navigate.push(url)
    }

  return (
    <div>
        <motion.div 
            animate={controls}
            initial={"hidden"}
            variants={styleStates}
            ref={ref}  
            id="card-container" 
            className='w-80 h-60'>
            <div id="card2" className='w-80 h-60'>
                <div className="front face">
                    <div className='absolute top-0 z-20 left-0 bottom-0 flex items-end pl-5 pb-5 w-80 h-60 text-black'>
                        <div className='flex flex-col'>
                            <span className='text-base text-white'>{props.project.title}</span>
                            <span className='text-gray-300 text-sm'>{props.project.location}</span>
                        </div>
                    </div>
                    <img className='w-80 h-60 z-10 object-cover project' src={props.project.image}/>
                </div>
                <div className="back face z-20 bg-black text-white p-5">
                    <div className='flex flex-col space-y-4'>
                        <div className='flex flex-col'>
                            <span className='text-base text-orange-400'>{props.project.title}</span>
                            <span className='text-gray-300 text-sm'>{props.project.location}</span>
                        </div>
                        <div>
                            <span className='text-base mt-3'>{truncate(props.project.what)}</span>
                        </div>
                        <div>
                            <Link href={"/project/" + props.project.id} >
                                <button onClick={() => routeToProject(props.project.id)} className="bg-transparent cursor-pointer w-max hover:bg-orange-500 text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                                    Lees meer
                                </button>
                            </Link>
                            
                        </div>
                        

                    </div>
                </div>
            </div>
        </motion.div>

    </div>
  )
}



export default ProjectCard