import React from 'react'
import styles from './Search.module.css'

export default function Search() {
  return (
    <div className={styles.wrap} style={{ zIndex: '2000', position: 'absolute', top: '0', left: '75px' }}>
      <h2 className={styles.category}>search</h2>
      <input type="search" />
    </div>
  )
}
