import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import styles from './RecommendCard.module.css'
import { useSelectedPlace } from '../../Contexts/SelectedPlaceContext'

export default function RecommendCard({ index, place, place_name, category_name, road_address_name, address_name }) {
  const { setSelectedPlace } = useSelectedPlace()

  const handleClick = () => {
    setSelectedPlace({ place })
  }

  return (
    <div key={index} className={styles.card} onClick={handleClick}>
      <p className={styles.card_category}>{category_name.split(' > ').pop()}</p>
      <p className={styles.card_title}>{place_name}</p>
      <p className={styles.address_name}>
        <MdLocationOn className={styles.icon} />
        {road_address_name || address_name}
      </p>
    </div>
  )
}
