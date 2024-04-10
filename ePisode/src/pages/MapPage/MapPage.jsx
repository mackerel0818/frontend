import React, { useEffect } from 'react'

export default function MapPage() {
  const mapRef = React.useRef(null)

  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API_KEY}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = mapRef.current
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        }
        new window.kakao.maps.Map(mapContainer, mapOption)
      })
    }

    window.onload = () => {
      onLoadKakaoMap()
    }

    return () => {
      window.onload = null
    }
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} id="map"></div>
}
