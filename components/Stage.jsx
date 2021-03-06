import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const styleStates = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: -100, transition: {duration: 1}}
}

const reversedStyleState = {
  visible: {translateX: 0, opacity: 1, transition: {duration: 1}},
  hidden: {opacity: 0, translateX: 100, transition: {duration: 1}}
}

function Stage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {

    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden")
    }
    
  }, [controls,inView]);

  return (
    <section ref={ref}  className='text-white text-center mt-10 h-max space-y-8 pb-5 px-10 pt-10 md:flex md:items-center' id='stage'>
      <motion.div
        animate={controls}
        initial={"hidden"}
        variants={styleStates}
        
        className='space-y-4 md:w-[50%]'>
        <p className='text-4xl font-bold mx-auto w-max'>Stage</p>
        <div id='stage-showcase' className='space-y-4'>
          <h3 className='text-lg text-center' >Healthcare Web Application Development in Angular for E.care</h3>

          <p className='font-bold text-lg'>Wie?</p>

          <p className='text-sm md:text-base text-center space-y-2 space-x-2'>
            In mijn laatste studiejaar heb ik gewerkt als stagiair bij E.Care voor 3 maanden (Maart - Mei 2022). Tijdens mijn zoektocht naar een stageplaats kwam ik terecht bij E.Care die software maakt, verkoopt en
            implementeerd om de medische diensten te helpen.
          </p>

          <p className='font-bold text-lg'>Wat?</p>

          <p className='text-sm md:text-base text-center space-y-2 space-x-2'>
            Mijn taak binnen E.Care was om het lopende kiosk project verder te zetten en tot een goed einde te brengen. Hierbij kwam communicatie met een partner aan te pas (in het Engels) en het veranderen van de UI en UX van de
            assessments (vragen). Omdat het lang wachten kan zijn op antwoorden en aanpassingen van de partner heb ik een 2de project gekregen. Dit project werd al snel mijn hoofdproject.
            Het tweede project was een clone van IFTTT. IFTTT (If This, Then That) is een populair platform waar je opeenvolgende acties kan laten uitvoeren als er een voorgaande actie gebeurd.
            Omdat bij E.Care alles zeer specifiek is kunnen we het online platform hier niet voor gebruiken.
            Mijn opdracht was om een systeem te maken dat werkt zoals IFTTT zodat iemand met de gepaste kennis in het ziekenhuis configuraties kan maken 
            waarbij deze kan kiezen welke acties uitgevoerd moeten worden als er een andere bepaalde actie uitgevoerd wordt.
          </p>

          <p className='font-bold text-lg'>Resultaat</p>

          <p className='text-sm md:text-base text-center space-y-2 space-x-2'>
            In de 3 maanden hebben we het kiosk project tot een goed einde gebracht waarbij het nu aan de partner is om een live demo te plaatsten bij een klant. 
            
            Het IFTTT project is ook tot een goed einde gebracht waarbij alle functionaliteiten werkend zijn. Momenteel zit het project in de test fase.
          </p>

         
        </div>
      </motion.div>
      <motion.div
        animate={controls}
        initial={"hidden"}
        variants={reversedStyleState}
        ref={ref} 
        className=' md:w-[50%] space-y-12'>
        <img src="assets/img/ecare.png" className='h-[50px] md:h-[80px] storytell mx-auto' alt="" />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 mx-auto'>
            <a href='/assets/documents/SamenvattingStage.pdf' target="_blank" rel="noreferrer" className='bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full w-32 h-32 text-white flex justify-center items-center flex-col mx-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>

              <p className='font-bold' >
                Samenvatting
              </p>
            </a>
            <a href='/assets/documents/ReflectieStage.pdf' target="_blank" rel="noreferrer" className='bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full w-32 h-32 text-white flex justify-center items-center flex-col mx-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>

              <p className='font-bold' >
                Reflectie
              </p>
            </a>
            <a href='/assets/documents/BewijsstukkenStage.pdf' target="_blank" rel="noreferrer" className='bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full w-32 h-32 text-white flex justify-center items-center flex-col mx-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>

              <p className='font-bold' >
                Bewijsstukken
              </p>
            </a>
          </div>
      </motion.div>
    
    </section>
  )
}

export default Stage