import React, { useEffect } from 'react'
import Language from './Language'
import Study from './Study'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const styleStates = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: -100, transition: {duration: 1}}
}

const progressState = (percent, delay) => {
  var states = {
    visible: {width: percent + "%", opacity: 1, transition: {duration: 1, delay: delay}},
    hidden: {opacity: 0, width: 0, transition: {duration: 1}}
  }

  return states;
}

const delayedStyleState = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1, delay: .5}},
  hidden: {opacity: 0, translateX: -100, transition: {duration: 1}}
}

const reversedDelayedStyleState = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1, delay: .5}},
  hidden: {opacity: 0, translateX: 100, transition: {duration: 1}}
}

const progressBarAnim = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1, delay: .5}},
  hidden: {opacity: 0, translateX: 100, transition: {duration: 1}}
}

function Skills() {
  const controls = useAnimation();
  const skillsContentControl = useAnimation();
  const progressControls = useAnimation();
  const [ref, inView] = useInView();
  const [skillsContent, skillsContentView] = useInView();
  const [experience, progressInView] = useInView();

  useEffect(() => {

    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    
    if (skillsContentView) {
      skillsContentControl.start("visible");
    }else {
      skillsContentControl.start("hidden");
    }

    if (progressInView) {
      progressControls.start("visible");
    }else {
      progressControls.start("hidden");
    }

    
  }, [controls, progressControls, inView, progressInView]);

  return (
    <section className='text-white  flex flex-col mt-10 h-max w-screen space-y-8 px-10' id='skills'>
        <motion.span 
          animate={controls}
          initial="hidden"
          variants={styleStates}
          className='text-3xl md:text-5xl font-bold border-white text-center border-b-2 w-max mx-auto'>Skills</motion.span>

        <div id='skill-details' className='md:flex md:flex-wrap '>
            <div ref={ref} className='text-center space-y-2 md:w-[50%]'>
              <motion.img 
                animate={controls}
                initial="hidden"
                variants={delayedStyleState} 
                src="assets/img/frontend.png" 
                className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
              <motion.p 
                animate={controls}
                initial="hidden"
                variants={delayedStyleState} 
                className='font-bold text-xl md:text-3xl'>Frontend</motion.p>
              <motion.div 
                animate={controls}
                initial="hidden"
                variants={delayedStyleState} 
                className='text-sm md:text-lg space-y-2'>
                <p className='mb-2'>
                  HTML5 & CSS
                  <br />
                  TS, JS, JQuery, Angular, React, PHP
                  <br />
                  Bootstrap, TailwindCSS, Angular Material
                </p>
                <span  className='font-bold'>Andere</span>
                <p>
                  SQL & NoSQL 
                  <br />
                   .NET Core, ASP.NET
                   <br />
                   Java Spring Boot & Thymeleaf
                   <br />
                    Python
                </p>
              </motion.div>
              
            </div>

            <div className='text-center space-y-2 md:w-[50%]'>
              <motion.img 
                animate={controls}
                initial="hidden"
                variants={reversedDelayedStyleState}
                src="assets/img/soft-skills.png" 
                className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] storytell mx-auto' alt="" />
              <motion.p 
                animate={controls}
                initial="hidden"
                variants={reversedDelayedStyleState}
                className='font-bold text-xl md:text-3xl'>Soft skills</motion.p>
              <motion.div 
                animate={controls}
                initial="hidden"
                variants={reversedDelayedStyleState} 
                className='text-sm md:text-lg space-y-2'>
                <p className='text-sm w-[60%] mx-auto md:text-lg'>
                  Ik werk graag in team waarbij we samen projecten kunnen realiseren en kennis kunnen delen. Ondanks dat ik graag in team werk kan ik ook perfect zelfstandig werken.
                  <br />
                  <br />
                  Ik ben sociaal en geef niet snel op bij problemen. Ik zet steeds door tot ik mijn doelen heb bereikt.
                </p>
              </motion.div>
            </div>

            <div className='text-center mt-8 space-y-2  md:w-[60%] md:mx-auto'>
              <motion.p 
                animate={progressControls}
                initial="hidden"
                variants={styleStates}
                ref={experience}
                className='font-bold text-xl md:text-3xl'>Vaardigheden</motion.p>
              <div >
                <div className="flex justify-between mb-1" style={{width: 100 + "%"}}>
                    <span className="text-base font-medium text-white">HTML5 & CSS</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(100)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 100 + "%"}}></motion.div>
                </div>

                <div className="flex justify-between mb-1 mt-2" style={{width: 90 + "%"}}>
                    <span className="text-base font-medium text-white">Angular</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(90, .2)} 
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 90 + "%"}}></motion.div>
                </div>

                <div>
                <div className="flex justify-between mb-1 mt-2" style={{width: 90 + "%"}}>
                    <span className="text-base font-medium text-white">C#</span>
                    <span className="text-sm font-medium text-white">Zeer goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(90, .4)} 
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 90 + "%"}}></motion.div>
                </div>

                <div className="flex justify-between mb-1 mt-2" style={{width: 75 + "%"}}>
                    <span className="text-base font-medium text-white">React</span>
                    <span className="text-sm font-medium text-white">Goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(75, .6)} 
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 75 + "%"}}></motion.div>
                </div>


                <div className="flex justify-between mb-1 mt-2" style={{width: 75 + "%"}}>
                    <span className="text-base font-medium text-white">.NET Core</span>
                    <span className="text-sm font-medium text-white">Goed</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(75, .8)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 75 + "%"}}></motion.div>
                </div>


                <div className="flex justify-between mb-1 mt-2" style={{width: 65 + "%"}}>
                    <span className="text-base font-medium text-white">SQL</span>
                    <span className="text-sm font-medium text-white">Meer dan basis</span>
                </div>
                <div className="w-full  rounded-full h-3 dark:bg-gray-700">
                    <motion.div 
                      animate={progressControls}
                      initial={"hidden"}
                      variants={progressState(65, 1)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 65 + "%"}}></motion.div>
                </div>

              </div>



                
              </div>
            </div>
        </div>




        <span className='text-2xl border-white border-b-2 w-max pb-2 md:w-[60%] md:mx-auto'>Talen</span>
        <div id='languages' className='space-y-4'>
            <Language language="Nederlands" progress="Moedertaal" value="100" animDelay="0" />
            <Language language="Engels" progress="Erg goed" value="85" animDelay=".2" />
        </div>

        <span className='text-2xl border-white border-b-2 w-max pb-2 md:w-[60%] md:mx-auto'>Studies</span>
        <div id='studies' className='space-y-4 md:w-[60%] md:mx-auto'>
            <Study school="Thomas More - Geel" degree="Bachelor Application Development" date="2019 - Heden" />
            <Study school="Campos - Turnhout" degree="Kantoor" date="2012 - 2019" />
        </div>
    </section>
  )
}

export default Skills