import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { GoHeart, GoHeartFill } from 'react-icons/go'

import styles from './RecommendCard.module.css'
import { useSelectedPlace } from '../../Contexts/SelectedPlaceContext'

export default function RecommendCard({ index, place, place_name, category_name, road_address_name, address_name }) {
  const { setSelectedPlace } = useSelectedPlace()
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setSelectedPlace({ place })
  }

  const handleLikeClick = (e) => {
    e.stopPropagation()
    setLiked(!liked)
  }

  return (
    <div key={index} className={styles.card} onClick={handleClick}>
      <div className={styles.wrap}>
        <div>
          <p className={styles.card_category}>{category_name.split(' > ').pop()}</p>
          <p className={styles.card_title}>{place_name}</p>
        </div>
        <button className={styles.btn} onClick={handleLikeClick}>
          {liked ? <GoHeartFill className={styles.icon_heart} /> : <GoHeart className={styles.icon_heart} />}
        </button>
      </div>

      <p className={styles.address_name}>
        <MdLocationOn className={styles.icon_location} />
        {road_address_name || address_name}
      </p>
    </div>
  )
}
