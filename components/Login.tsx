import { ConnectWallet } from '@thirdweb-dev/react'
import React from 'react'

function Login() {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center mb-10">
            <img 
                className="rounded-full h-56 w-56 mb-10"
                src="https://i1.sndcdn.com/avatars-000334852131-pb0r96-t500x500.jpg"
                alt=""
            />
            <h1 className="text-6xl text-white font-bold">WOEBEGONE LOTTERY DRAW</h1>
            <h2 className="mt-5 text-white font-bold">Get Started By logging in with your Metamask</h2>
            <ConnectWallet accentColor="#0A1F1C" colorMode="dark" className="px-8 py-5 mt-10 rounded-lg shadow-lg font-bold items-center"/>
        </div>
    </div>
  )
}

export default Login