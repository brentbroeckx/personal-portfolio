import React from 'react'
import Image from 'next/image'
import placeholder from '../public/assets/img/project-placeholder.png'
import placeholder2 from '../public/assets/img/default-placeholder.png'

function ProjectCard(props) {

  return (
    <div className="basis-full flex justify-center">
        <div id="card-container" className='w-80 h-60'>
            <div id="card2" className='w-80 h-60'>
            <div className="front face">
                <div className='absolute top-0 z-20 left-0 bottom-0 flex items-end pl-5 pb-5 w-80 h-60 text-black'>
                    <div className='flex flex-col'>
                        <span className='text-base text-white'>{props.name}</span>
                        <span className='text-gray-300 text-sm'>{props.place}</span>
                    </div>
                </div>
                <img className='w-80 h-60 z-10 object-cover project' src={props.image}/>
            </div>
            <div className="back face z-20 bg-black text-white p-5">
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <span className='text-base'>{props.name}</span>
                        <span className='text-gray-300 text-sm'>{props.place}</span>
                    </div>
                    <div>
                        <span className='text-base mt-3'>{props.details}</span>
                    </div>
                    <div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Details
                        </button>
                    </div>
                    

                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard