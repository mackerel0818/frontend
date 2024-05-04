import styles from './Header.module.css'
import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

export default function Header({ homeRef, aboutRef, contactRef }) {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <img className={styles.dot} src="https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/dot2_l1kmgy.png"></img>
    </header>
  )
}
