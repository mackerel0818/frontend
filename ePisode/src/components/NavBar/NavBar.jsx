import React from 'react'
import styles from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ homeRef, aboutRef, contactRef }) {
  const navigate = useNavigate()

  const handleClick = () => {
    //TODO - localStorage 임시 사용 중, API 사용 할 시 바꿔야함
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (isLoggedIn) {
      navigate('/map')
    } else {
      navigate('/login')
    }
  }

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.items}>
        <li className={styles.item} style={{ color: '#ff70a6' }} onClick={() => scrollToRef(homeRef)}>
          Home
        </li>
        <li className={styles.item} onClick={() => scrollToRef(aboutRef)}>
          About Us
        </li>
        <li className={styles.item} onClick={() => scrollToRef(contactRef)}>
          Contact
        </li>
      </ul>
      <button className={styles.btn} onClick={handleClick}>
        LET'S GO
      </button>
    </nav>
  )
}
