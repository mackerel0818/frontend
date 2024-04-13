import React from 'react'
import styles from './Diary.module.css'

export default function Diary({ selectedPlace }) {
  console.log(selectedPlace)
  return (
    <div className={styles.selectedPlaceInfo}>
      <h2>선택된 장소: {selectedPlace.place_name}</h2>
      <p>주소: {selectedPlace.address_name}</p>
      <p>전화번호: {selectedPlace.phone || '정보 없음'}</p>
    </div>
  )
}
