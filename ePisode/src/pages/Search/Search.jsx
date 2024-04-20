import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'

export default function Search() {
  return (
    <motion.div
      className={styles.wrap}
      style={{ zIndex: '2000', position: 'absolute', top: '0', left: '75px' }}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.category}>search</h2>
      <div className={styles.wrap_input}>
        <FaSearch id={styles.search_icon} />
        <input placeholder="검색어를 입력하세요." />
      </div>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </motion.div>
  )
}
