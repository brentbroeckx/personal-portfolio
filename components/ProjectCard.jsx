import React from 'react'
import Image from 'next/image'
import placeholder from '../public/assets/img/project-placeholder.png'
import placeholder2 from '../public/assets/img/default-placeholder.png'

function ProjectCard() {

  return (
    <div className="basis-full flex justify-center">
        {/* <div className='bg-gray-700 w-80 h-60 flex items-end relative card'>
                <img className='brightness-50 card-image h-full w-full' loading='lazy' src="/assets/img/default-placeholder.png"></img>
                <img className='brightness-50 card-image h-full w-full' loading='lazy' src="/assets/img/project-placeholder.png"></img>
            <div className='mb-5 ml-5 flex flex-col z-20 front'>
                <span className='text-base'>Project 4.0</span>
                <span className='text-gray-300 text-sm'>Thomas More - Geel</span>
            </div>
            <div className='mb-5 ml-5 flex flex-col z-20 back'>
                <span className='text-base'>Project 4.000</span>
                <span className='text-gray-300 text-sm'>Thomas More - Geel</span>
            </div>
        </div> */}

        <div id="card-container" className='w-80 h-60'>
            <div id="card2" className='w-80 h-60'>
            <div className="front face">
                <div className='absolute top-0 left-0 bottom-0 flex items-end pl-5 pb-5 w-80 h-60 text-black'>
                    <div className='flex flex-col'>
                        <span className='text-base'>Project 4.0</span>
                        <span className='text-gray-300 text-sm'>Thomas More - Geel</span>
                    </div>
                </div>
                <img className='w-80 h-60 object-cover' src="/assets/img/default-placeholder.png"/>
            </div>
            <div className="back face bg-black text-white p-5">
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <span className='text-base'>Project 4.0</span>
                        <span className='text-gray-300 text-sm'>Thomas More - Geel</span>
                    </div>
                    <div>
                        <span className='text-base mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur optio quos officiis adipisci vero quisquam eius?</span>
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