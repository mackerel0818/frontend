import React from 'react'
import { motion } from 'framer-motion'
import styles from './Diary.module.css'
import { MdLocationOn } from 'react-icons/md'
import { IoCloseOutline } from 'react-icons/io5'

import { useNavigate } from 'react-router-dom'

export default function Diary({ selectedPlace, setSelectedPlace }) {
  const categoryName = selectedPlace.category_name.split(' > ').pop()

  const navigate = useNavigate()

  const handleAddEpisodeClick = () => {
    navigate('/map/new')
  }

  const handleCloseClick = () => {
    setSelectedPlace(null)
  }

  return (
    <motion.div
      style={{
        WebkitUserSelect: 'none' /* Safari */,
        msUserSelect: 'none' /* Internet Explorer/Edge */,
        userSelect: 'none' /* Non-prefixed version, currently supported by Chrome, Firefox, and Opera */,
      }}
      className={styles.selectedPlaceInfo}
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{
        duration: 0.5,
      }}
    >
      <button className={styles.close_diary} onClick={handleCloseClick}>
        <IoCloseOutline />
      </button>
      <section className={styles.image}></section>
      <section className={styles.place_info}>
        <div className={styles.wrap_name}>
          <h2 className={styles.place_name}>{selectedPlace.place_name}</h2>
          <p className={styles.category_name}>{categoryName}</p>
        </div>
        <p className={styles.address_name}>
          <MdLocationOn className={styles.icon} />
          {selectedPlace.road_address_name || selectedPlace.address_name}
        </p>
      </section>
      <button className={styles.add_episode} onClick={handleAddEpisodeClick}>
        <span className={styles.plus_btn}>+</span>
      </button>
      <section className={styles.diary}>
        <ul className={styles.episodes}>
          <li className={styles.episode}>EPISODE 1 - Lorem ipsum dolor sit a...</li>
          <li className={styles.episode}>EPISODE 2 - Lorem ipsum dolor sit a...</li>
          <li className={styles.episode}>EPISODE 3 - Lorem ipsum dolor sit a...</li>
          <li className={styles.episode}>EPISODE 4 - Lorem ipsum dolor sit a...</li>
          <li className={styles.episode}>EPISODE 5 - Lorem ipsum dolor sit a...</li>
          <li className={styles.episode}>EPISODE 6 - Lorem ipsum dolor sit a...</li>
        </ul>
      </section>
    </motion.div>
  )
}
