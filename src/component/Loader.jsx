import React from 'react'
import {ColorRing} from  'react-loader-spinner'

export const Loader = () => {
  return (
  
    <div className="fixed inset-0 flex justify-center items-center bg-white">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    
  )
}