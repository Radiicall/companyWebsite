import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.jsx'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sneik | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={styles.logo}>
        <Image src="/../public/sneik.png" alt="Sneik" width={1643} height={387} />
      </div>
    </>
  )
}

export default Home
