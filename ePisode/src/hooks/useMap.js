import React, { useEffect } from 'react'

const useMap = (mapRef, apiKey) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const defaultLat = 36.1458862
        const defaultLon = 128.3928142

        const showMap = (lat, lon) => {
          const locPosition = new window.kakao.maps.LatLng(lat, lon)
          const mapContainer = mapRef.current
          const mapOption = {
            center: locPosition,
            level: 3,
          }

          const map = new window.kakao.maps.Map(mapContainer, mapOption)
          const zoomControl = new window.kakao.maps.ZoomControl()
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

          var marker = new window.kakao.maps.Marker({
            position: locPosition,
          })

          marker.setMap(map)

          const ps = new window.kakao.maps.services.Places()

          kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            var latlng = mouseEvent.latLng

            marker.setPosition(latlng)

            const categories = ['MT1', 'CS2', 'PS3', 'SC4', 'AC5', 'PK6', 'OL7', 'SW8', 'BK9', 'CT1', 'AG2', 'PO3', 'AT4', 'AD5', 'FD6', 'CE7', 'HP8', 'PM9']

            categories.forEach((category) => {
              ps.categorySearch(
                category,
                (result, status) => {
                  if (status === window.kakao.maps.services.Status.OK) {
                    console.info(`Category: ${category}`, result)
                  }
                },
                {
                  location: locPosition,
                  radius: 500,
                },
              )
            })
          })
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // const lat = parseFloat(position.coords.latitude.toFixed(4)) + -0.0002
              // const lon = parseFloat(position.coords.longitude.toFixed(4)) + 0.004

              const lat = position.coords.latitude
              const lon = position.coords.longitude

              showMap(lat, lon)
            },
            (error) => {
              console.error(error)
              showMap(defaultLat, defaultLon)
            },
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 0,
            },
          )
        } else {
          console.error('이 브라우저에서는 현재 위치 표시 기능을 지원하지 않습니다.')
          showMap(defaultLat, defaultLon)
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
