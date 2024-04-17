import React from 'react'
import style from './MyPageEdit.module.css'
import { useNavigate } from 'react-router-dom'

export default function MyPageEdit() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/map')
  }

  const handleInnerClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={style.filter} onClick={handleClick}> 
      <div className={style.mywrap} onClick={handleInnerClick}>
        <p className={style.title}>사용자 정보 수정</p>
        <div className={style.proCate}>
            <p className={style.proHead}>프로필 사진</p>
            <p className={style.proHead}>이름</p>
            <p className={style.proHead}>MBTI</p>
            <p className={style.proHead}>관심사</p>
            <p className={style.proHead}>주소</p>
        </div>
          

      </div>
    </div>
  )
}
