import React, { useState } from 'react'
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

  const saveClick = () => {
    navigate('/map/mypage')
  }

  const deleteClick = () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      navigate("/")
    } else {
      alert("탈퇴 취소");
    }
  }
  
  //TODO  사진 업로드, mbti, 관심사 선택 창

  return (
    <div className={style.filter} onClick={handleClick}> 
      <div className={style.mywrap} onClick={handleInnerClick}>
        <p className={style.title}>사용자 정보 수정</p>
        <div className={style.proList}>
            <p className={style.proHead}>프로필 사진</p>
            <div className={style.group}>
              <p className={style.proHead}>이름</p>
              <input className={style.inputName}></input>
            </div>
            <div className={style.group}>
              <p className={style.proHead}>MBTI</p>
              <select className={style.selectMbti}></select>
            </div>
            
            <p className={style.proHead}>관심사</p>
            <div className={style.group}>
              <p className={style.proHead}>주소</p>
              <input className={style.inputAddress}></input>
            </div>
            
        </div>
        <div className={style.bottom}>
          <button className={style.saveBtn} onClick={saveClick}>저장</button>
          <button className={style.deleteUser} onClick={deleteClick}>탈퇴하기</button>
        </div>
        
      </div>
    </div>
  )
}
