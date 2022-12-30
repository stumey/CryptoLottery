import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery Draw</title>
      </Head>

      <Header />
      <h1> Lets build an awesome Lottery Web3 Dapp! </h1>
    </div>
  )
}

export default Home
