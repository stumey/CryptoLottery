import React from 'react'
import PropogateLoader from 'react-spinners/PropagateLoader'

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col 
    items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img className="rounded-full h-20 w-20" 
             src="https://i1.sndcdn.com/avatars-000334852131-pb0r96-t500x500.jpg" 
             alt="" 
        />
        <h1 className="text-lg text-white font-bold">Loading Lottery Draw</h1>
      </div>
      <PropogateLoader color="white" size={30}/>
    </div>
  )
}

export default Loading