const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY
const headers = new Headers({ Authorization: `KakaoAK ${apiKey}` })

export const searchPlaces = async (keyword) => {
  if (!keyword.trim()) {
    throw new Error('검색어를 입력해주세요!')
  }

  const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {
    headers,
  })

  if (!response.ok) {
    throw new Error('검색 결과를 가져오는데 실패했습니다.')
  }

  const data = await response.json()
  return data.documents
}
