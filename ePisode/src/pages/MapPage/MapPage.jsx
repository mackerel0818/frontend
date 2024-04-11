import React, { useRef } from 'react'
import useMap from '../../hooks/useMap'

export default function MapPage() {
  const mapRef = useRef(null)
  const apiKey = import.meta.env.VITE_KAKAO_API_KEY

  useMap(mapRef, apiKey)

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} id="map"></div>
}
