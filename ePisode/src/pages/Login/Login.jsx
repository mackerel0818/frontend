import React, { useState } from 'react'
import style from './Login.module.css'


export default function Login() {

  return (
    <>
      <img className={style.logo} src='https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/logo_on0pc8.png'></img>
      <h2 className={style.Login}>LOGIN</h2>
      <form>
        <p>
            <input className={style.email} type='email' name='email' placeholder='Email'/>
        </p>
        <p></p>
        <p>
            <input className={style.password} type='password' name='password' placeholder='Password'/>
        </p>
      </form>
      <button className={style.button}>Login</button>
      <button className={style.noId}>Don't have an account?</button>
    </>
  )
}
