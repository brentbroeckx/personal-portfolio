import React from 'react'

function Language() {
  return (
      <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-white">Dutch</span>
            <span className="text-sm font-medium text-white">Native language</span>
        </div>
        <div className="w-full  rounded-full h-3 dark:bg-gray-700">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-3 rounded-full" style={{width: 100 + "%"}}></div>
        </div>
      </div>
    
  )
}

export default Language