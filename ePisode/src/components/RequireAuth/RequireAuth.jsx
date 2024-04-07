import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children }) {
  const isLoggedIn = true

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children
}
