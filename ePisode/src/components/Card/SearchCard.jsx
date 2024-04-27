import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import styles from './SearchCard.module.css'

export default function SearchCard({ index, place_name, category_name, road_address_name, address_name }) {
  return (
    <div key={index} className={styles.card}>
      <div className={styles.wrap_title}>
        <p className={styles.card_title}>{place_name}</p>
        <p className={styles.card_category}>{category_name.split(' > ').pop()}</p>
      </div>
      <p className={styles.address_name}>
        <MdLocationOn className={styles.icon} />
        {road_address_name || address_name}
      </p>
    </div>
  )
}
