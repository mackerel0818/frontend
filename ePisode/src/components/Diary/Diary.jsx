import React from 'react'
import { motion } from 'framer-motion'
import styles from './Diary.module.css'

export default function Diary({ selectedPlace }) {
  return (
    <motion.div
      className={styles.selectedPlaceInfo}
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <h2>선택된 장소: {selectedPlace.place_name}</h2>
      <p>주소: {selectedPlace.address_name}</p>
      <p>전화번호: {selectedPlace.phone || '정보 없음'}</p>
    </motion.div>
  )
}
