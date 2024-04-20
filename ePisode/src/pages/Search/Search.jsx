import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'

export default function Search() {
  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY
  const headers = new Headers({ Authorization: `KakaoAK ${apiKey}` })

  const [keyword, setKeyword] = useState('')
  const [places, setPlaces] = useState([])

  const handleSearch = async () => {
    if (!keyword.trim()) {
      alert('검색어를 입력해주세요!')
      return
    }

    try {
      const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {
        headers,
      })

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setPlaces(data.documents)
      } else {
        console.error('Failed to fetch:', data)
        alert('검색 결과를 가져오는데 실패했습니다.')
      }
    } catch (error) {
      console.error('검색 에러:', error)
      alert('검색 중 오류가 발생했습니다.')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
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
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.place_name}</li>
        ))}
      </ul>
    </motion.div>
  )
}
