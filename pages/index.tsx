import { 
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useMetamask,
  useDisconnect,
  ConnectWallet, 
} from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import PropogateLoader from 'react-spinners/PropagateLoader'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return (
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
  if (!address) return (<Login /> )

  console.log(address);
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery Draw</title>
      </Head>

      <Header />
    </div>
  )
}

export default Home
