import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/404.json'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div
      className={styles.wrap}
      style={{
        WebkitUserSelect: 'none' /* Safari */,
        msUserSelect: 'none' /* Internet Explorer/Edge */,
        userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Firefox, and Opera */,
      }}
    >
      <Lottie style={{ pointerEvents: 'none', position: 'relative' }} options={defaultOptions} height={700} width={580} />
      <Link to={'/'} className={styles.link}>
        <span className={styles.text}>← BACK TO HOME</span>
      </Link>
    </div>
  )
}
