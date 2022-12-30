import React from 'react'

function Header() {
  return (
    <div>
        <div className="flex items-center space-x 2">
            <img
                className="rounded-full h-20 w-20" 
                src="https://i1.sndcdn.com/avatars-000334852131-pb0r96-t500x500.jpg"
                alt=""
            />
        <div>
            <h1 className="text-lg text-white font-bold">WOEBEGONE DRAW</h1>
            <p className="text-xs  text-emerald-500 truncate">User...</p>
        </div>
        </div>
    </div>
  )
}

export default Header