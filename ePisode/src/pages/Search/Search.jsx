import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'
import SearchCard from '../../components/Card/SearchCard'

export default function Search() {
  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY
  const headers = new Headers({ Authorization: `KakaoAK ${apiKey}` })

  const [keyword, setKeyword] = useState('')
  const [searchAttempted, setSearchAttempted] = useState(false)

  const {
    data: places = [],
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['places', keyword],
    queryFn: async () => {
      if (!keyword.trim()) {
        throw new Error('검색어를 입력해주세요!')
      }

      setSearchAttempted(true)

      const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {
        headers,
      })

      if (!response.ok) {
        throw new Error('검색 결과를 가져오는데 실패했습니다.')
      }

      const data = await response.json()
      return data.documents
    },
    enabled: false,
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
        {!isLoading && searchAttempted && places.length === 0 && <p>검색 결과가 없습니다.</p>}
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
