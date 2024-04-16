import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddEpisode.module.css'

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
        backgroundColor: 'rgba(107, 107, 107, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
      }}
      onClick={handleClick}
    >
      <div
        className={styles.episode}
        style={{
          width: '1000px',
          height: '600px',
          borderRadius: '25px',
          overflow: 'hidden',
          // backgroundColor: 'lightgrey',
          position: 'fixed',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '2000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p>대충 이쯤 날짜</p>
          <h2>에피소드 추가하는 창</h2>
          <button style={{ width: '40px', height: '30px' }} onClick={handleClick}>
            x
          </button>
        </div>
        <section style={{ marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.45)', width: '85%', height: '70%', border: '1px solid #e8e8e8', borderRadius: '10px' }}></section>
      </div>
    </div>
  )
}
