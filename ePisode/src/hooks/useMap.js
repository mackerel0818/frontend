import React, { useEffect } from 'react'

const useMap = (mapRef, apiKey) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = parseFloat(position.coords.latitude.toFixed(4))
              const lon = parseFloat(position.coords.longitude.toFixed(4))

              const locPosition = new window.kakao.maps.LatLng(lat, lon)

              const mapContainer = mapRef.current
              const mapOption = {
                center: locPosition,
                level: 3,
              }

              const map = new window.kakao.maps.Map(mapContainer, mapOption)

              const zoomControl = new window.kakao.maps.ZoomControl()
              map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

              var marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(lat, lon),
                map: map,
              })
            },
            (error) => {
              console.error(error)
            },
            {
              enableHighAccuracy: true, // 높은 정확도 요청
              timeout: 15000, // 15초 내에 응답이 없으면 오류를 반환 (선택적)
              maximumAge: 0, // 캐시된 위치 정보 무시, 항상 최신 정보 요청 (선택적)
            },
          )
        } else {
          console.error('이 브라우저에서는 현재 위치 표시 기능을 지원하지 않습니다.')
        }
      })
    }

    mapScript.onload = onLoadKakaoMap

    return () => {
      mapScript.onload = null
    }
  }, [mapRef, apiKey])
}

export default useMap
