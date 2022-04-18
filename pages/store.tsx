import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar.jsx'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sneik | Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
    </>
  )
}

export default Home
