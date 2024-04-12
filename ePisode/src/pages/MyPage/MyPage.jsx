import React from 'react';
import style from './MyPage.module.css'
import SideBar from '../../components/SideBar/SideBar';

export default function MyPage() {
    
    return (
        <div className={style.pagewrap}>
            <SideBar />
            <div className={style.mywrap}>
                <img
                    className={style.image}
                    src='https://images.unsplash.com/photo-1712574340322-aaeae2cbaa8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                </img>
                <div className={style.name}>닉네임</div>
                <div className={style.mbti}>ENFP</div>
                <button className={style.edit}>edit</button>
                <div className={style.email}>abc123@gmail.com</div>
                <button className={style.logout}>Logout</button>
                <div className={style.line}
                        style={{
                            width: "60%",
                            borderBottom: "1px solid #aaa",
                            lineHeight: "0.1em",
                            margin: "10px 0 20px",
                        }}
                    >
                </div>
                <p className={style.favorite}>관심사</p>
                <p className={style.visit}>방문한 장소 수</p>
                <p className={style.bookmark}>즐겨찾기</p>
            </div>
        </div>
        
    );
}

