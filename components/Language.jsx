import React from 'react'

function Language(props) {
  return (
      <div>
        <div className="flex justify-between mb-1" style={{width: props.value + "%"}}>
            <span className="text-base font-medium text-white">{props.language}</span>
            <span className="text-sm font-medium text-white">{props.progress}</span>
        </div>
        <div className="w-full  rounded-full h-3 dark:bg-gray-700">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: props.value + "%"}}></div>
        </div>
      </div>
    
  )
}

export default Language