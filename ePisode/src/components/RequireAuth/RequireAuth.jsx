import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children }) {
  //TODO - Auth api 연결할 때 토큰 검사로 바꿔야 함
  const isLoggedIn = true

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children
}
