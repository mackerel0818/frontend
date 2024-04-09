import React, { useRef } from 'react'
import Header from '../../components/Header/Header'
import HomePage from '../HomePage/HomePage'

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
      <section ref={aboutRef} style={{ backgroundColor: 'lightblue', width: '100%', height: '100vh' }}>
        <p>about 페이지</p>
      </section>
      <section ref={contactRef} style={{ backgroundColor: 'pink', width: '100%', height: '100vh' }}>
        <p>contact 페이지</p>
      </section>
    </>
  )
}
