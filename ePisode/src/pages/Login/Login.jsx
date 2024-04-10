import React, { useState } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate();

  const imgClick = () => {
    navigate('/')
  }

  const loginClick = () => {
    const isEmail = localStorage.getItem('isEmail')
    const isPassword = localStorage.getItem('isPassword')

    if(isEmail && isPassword) {
      navigate('/');
    } else if (isEmail === null || isPassword === null){
      alert ("아이디와 비밀번호를 입력하세요.")
    } else{
      alert ("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  }

  const noidClick = () => {
    navigate('/signup');
  }

  return (
    <>
      <img 
        className={style.logo} 
        src='https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/logo_on0pc8.png'
        onClick={imgClick}
      >
      </img>
      <h2 className={style.Login}>LOGIN</h2>
      <form>
        <p>
            <input 
              className={style.email} 
              type='email' 
              name='email' 
              placeholder='Email'
            />
        </p>
        <p></p>
        <p>
            <input 
              className={style.password} 
              type='password' 
              name='password' 
              placeholder='Password'
            />
        </p>
      </form>
      <button 
        className={style.button} 
        onClick={loginClick}
      >
        Login
      </button>
      <p 
        className={style.noId} 
        onClick={noidClick}
      >
        Don't have an account?
      </p>
    </>
  )
}
