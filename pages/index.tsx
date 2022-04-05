import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.jsx'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Your mom</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <div>

    </div>
    </>
  )
}

export default Home
