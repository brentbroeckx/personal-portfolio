import React from 'react'

function SkillCircle() {
    var styleObject = {
        div: {
            color: "red",
            border: "1px solid black"
        },
        
    }

  return (
      <div className='min-w-[11rem]'>
        <div className="text-center w-44">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill='none'>
                <path className='circle-color' d="M40,90
                A40,40 0 1,1 60,90" />
                <path className='circle-fill fill-10'  d="M40,90
                A40,40 0 1,1 60,90" />
            </svg>
        </div>
      </div>
  )
}

export default SkillCircle