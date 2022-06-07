import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const styleStates = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: 100, transition: {duration: 1}}
}

function Study(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {

    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    
  }, [controls,inView]);

  return (
    <motion.div 
      animate={controls}
      initial={"hidden"}
      variants={styleStates}
      ref={ref} 
      className='flex items-center space-x-4'
      >
      <div className='rounded-full w-16 h-16 md:h-24 md:w-24 flex items-center justify-center bg-gradient-to-t from-blue-600 to-cyan-400'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className='flex flex-col'>
          <span className='text-base md:text-xl'>{props.school}</span>
          <div className='flex flex-col text-sm md:text-base'>
            <span>{props.degree}</span>
            <span className='text-gray-400' >{props.date}</span>
          </div>
      </div>
    </motion.div>
  )
}

export default Study