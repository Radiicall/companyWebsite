import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'

export default function navbar(){
  return (
    <nav>
      <Link href="/">
        <a className={navStyles.navigation}>Home</a>
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