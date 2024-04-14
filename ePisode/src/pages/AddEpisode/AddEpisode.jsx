import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddEpisode() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/map')
  }
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
      }}
    >
      <div style={{ width: '500px', height: '500px', backgroundColor: 'lightgrey', position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)', zIndex: '2000' }}>
        <h2>에피소드 추가하는 창</h2>
        <button style={{ width: '40px', height: '30px' }} onClick={handleClick}>
          x
        </button>
      </div>
    </div>
  )
}
