import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const progressState = (percent, delay) => {
  var states = {
    visible: {width: percent + "%", opacity: 1, transition: {duration: 1, delay: delay}},
    hidden: {opacity: 0, width: 0, transition: {duration: 1}}
  }

  return states;
}

function Language(props) {

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
      <div ref={ref} className='md:w-[60%] md:mx-auto'>
        <div className="flex justify-between mb-1" style={{width: props.value + "%"}}>
            <span className="text-base font-medium text-white">{props.language}</span>
            <span className="text-sm font-medium text-white">{props.progress}</span>
        </div>
        <div className="w-full  rounded-full h-3 dark:bg-gray-700">
            <motion.div 
                      animate={controls}
                      initial={"hidden"}
                      variants={progressState(90, props.animDelay)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: props.value + "%"}}></motion.div>
        </div>
      </div>
    
  )
}

export default Language