import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/navbar.module.css'

export default function navbar(){
  return (
    <nav>
      <Link href="/" passHref>
        <a className={navStyles.logo}>
          <Image src="/logo.png" alt="logo" width="25" height="25" />
        </a>
      </Link>
      <Link href="/store">
        <a className={navStyles.store}>Store</a>
      </Link>
      <Link href="/about">
        <a className={navStyles.navigation}>About Us</a>
      </Link>
      <Link href="https://github.com/Radiicall/companyWebsite">
        <a className={navStyles.navigation} target="_blank">GitHub</a>
      </Link>
    </nav>
  )
}