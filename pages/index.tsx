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
import Head from 'next/head'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Login from '../components/Login'

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return ( <Loading /> )
  if (!address) return ( <Login /> )

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
