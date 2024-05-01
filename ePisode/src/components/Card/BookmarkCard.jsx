import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { GoHeartFill, GoHeart } from 'react-icons/go'

import styles from './BookmarkCard.module.css'
import { useSelectedPlace } from '../../contexts/SelectedPlaceContext'

export default function BookmarkCard({ index, place, place_name, category_name, road_address_name, address_name }) {
  const { setSelectedPlace } = useSelectedPlace()
  const [loved, setLoved] = useState(false)

  const handleClick = () => {
    setSelectedPlace({ place })
  }

  const handleLoveClick = (e) => {
    e.stopPropagation()
    setLoved(!loved)
  }

  return (
    <div key={index} className={styles.card} onClick={handleClick}>
      <div className={styles.wrap}>
        <div>
          <p className={styles.card_category}>{category_name.split(' > ').pop()}</p>
          <p className={styles.card_title}>{place_name}</p>
        </div>
        <div className={styles.wrap_btn}>
          <button className={styles.btn} onClick={handleLoveClick}>
            {loved ? <GoHeartFill className={styles.icon_heart} /> : <GoHeart className={styles.icon_heart} />}
          </button>
        </div>
      </div>

      <p className={styles.address_name}>
        <MdLocationOn className={styles.icon_location} />
        {road_address_name || address_name}
      </p>
    </div>
  )
}
