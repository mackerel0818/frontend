import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/no.json'
import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'
import SearchCard from '../../components/Card/SearchCard'
import { searchPlaces } from '../../services/searchPlaces'

export default function Search() {
  const [keyword, setKeyword] = useState('')

  const {
    data: places = [],
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['places', keyword],
    queryFn: () => searchPlaces(keyword),
    enabled: false,
    onSuccess: () => setSearchAttempted(true),
    onError: (error) => {
      console.error(error.message)
      setSearchAttempted(true)
    },
  })
  const handleSearch = async () => {
    if (!keyword.trim()) {
      alert('검색어를 입력해주세요!')
      return
    }

    refetch().catch(console.error)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: 20 * index,
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <motion.div
      className={styles.wrap}
      style={{ zIndex: '2000', position: 'absolute', top: '0', left: '75px' }}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.category}>검색</h2>
      <div className={styles.wrap_input}>
        <FaSearch id={styles.search_icon} />
        <input placeholder="검색어를 입력하세요." value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={handleKeyDown} />
      </div>
      <div className={styles.wrap_card}>
        {isLoading && <p>로딩 중...</p>}
        {places.length === 0 && !isLoading && <Lottie style={{ pointerEvents: 'none', position: 'relative' }} options={defaultOptions} height={250} width={250} />}
        {places.map((place, index) => (
          <motion.div custom={index} variants={cardVariants} initial="hidden" animate="visible" key={place.id}>
            <SearchCard
              key={place.id}
              index={index}
              place={place}
              place_name={place.place_name}
              category_name={place.category_name}
              road_address_name={place.road_address_name}
              address_name={place.address_name}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
