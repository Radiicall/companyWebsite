import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/about.module.css'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sneik | About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={styles.invdiv}>
        <h1 className={styles.header1}>About Us</h1>
        <h2 className={styles.header2}>Selling computer parts since 1998</h2>
        <p className={styles.content}>Contact us here:</p>
        <p className={styles.content}>Phone: +1 800 S N E I K</p>
        <p className={styles.content}>Email: <a className={styles.mail} href="mailto:contact@sneik.com">contact@sneik.com</a></p>
        <p className={styles.content}>Twitter: @SneikComputers</p>
      </div>
    </>
  )
}

export default About
