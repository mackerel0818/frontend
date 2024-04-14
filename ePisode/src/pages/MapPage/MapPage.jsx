import React, { useRef, useState } from 'react'
import useMap from '../../hooks/useMap'
import styles from './MapPage.module.css'
import SideBar from '../../components/SideBar/SideBar'
import Diary from '../../components/Diary/Diary'
import { Outlet } from 'react-router-dom'

export default function MapPage() {
  const mapRef = useRef(null)
  const apiKey = import.meta.env.VITE_KAKAO_API_KEY
  const [selectedPlace, setSelectedPlace] = useState(null)

  useMap(mapRef, apiKey, setSelectedPlace)

  return (
    <>
      <SideBar />
      <div className={styles.mapContainer}>
        <div ref={mapRef} className={styles.map} id="map"></div>
        {selectedPlace && <Diary selectedPlace={selectedPlace} />}
        <Outlet />
      </div>
    </>
  )
}
