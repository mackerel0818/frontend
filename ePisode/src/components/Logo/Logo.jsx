import React from 'react'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <>
      <img className={styles.dot} src="https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/dot1_xotw7g.png"></img>
      <Link to={'/'}>
        <img className={styles.logo} src="https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/logo_on0pc8.png"></img>
      </Link>
    </>
  )
}
