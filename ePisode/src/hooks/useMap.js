import React, { useEffect } from 'react'

const useMap = (mapRef, apiKey) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

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

    mapScript.onload = onLoadKakaoMap

    return () => {
      mapScript.onload = null
    }
  }, [mapRef, apiKey])
}

export default useMap
