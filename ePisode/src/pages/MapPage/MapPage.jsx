import React, { useRef, useState } from 'react'
import useMap from '../../hooks/useMap'
import styles from './MapPage.module.css'
import SideBar from '../../components/SideBar/SideBar'

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
        {selectedPlace && (
          <div className={styles.selectedPlaceInfo}>
            <h2>선택된 장소: {selectedPlace.place_name}</h2>
            <p>주소: {selectedPlace.address_name}</p>
            <p>전화번호: {selectedPlace.phone}</p>
          </div>
        )}
      </div>
    </>
  )
}
