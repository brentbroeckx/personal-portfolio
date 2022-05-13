import React from 'react'

function SkillCircle() {
  return (
      <div className='min-w-[9rem]'>
        <div className="text-center w-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill='none'>
                <path className='circle-color' d="M40,90
                A40,40 0 1,1 60,90" />
                <path className='circle-fill bg-gradient-to-r from-red-700 to-blue-900 fill-10'  d="M40,90
                A40,40 0 1,1 60,90" />
            </svg>
        </div>
      </div>
  )
}

export default SkillCircle