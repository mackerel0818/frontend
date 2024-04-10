import React, { useRef } from 'react'
import Header from '../../components/Header/Header'
import HomePage from '../HomePage/HomePage'
import styles from './MainPage.module.css'

export default function MainPage() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <div
        ref={homeRef}
        style={{
          WebkitUserSelect: 'none' /* Safari */,
          msUserSelect: 'none' /* Internet Explorer/Edge */,
          userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Firefox, and Opera */,
        }}
      >
        <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
        <HomePage />
      </div>
      <section className={styles.wrap_about} ref={aboutRef}>
        <article className={styles.about1}>
          <div className={styles.image}></div>
          <div className={styles.desc}>설명</div>
        </article>
        <article className={styles.about2}>
          <div className={styles.desc2}>설명</div>
          <div className={styles.image2}></div>
        </article>
      </section>
      <footer className={styles.wrap_contact} ref={contactRef}>
        <p>contact 페이지</p>
      </footer>
    </>
  )
}
