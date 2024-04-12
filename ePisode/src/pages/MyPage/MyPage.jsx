import React from 'react';
import style from './MyPage.module.css'
import SideBar from '../../components/SideBar/SideBar';

export default function MyPage() {
    
    return (
        <>
            <SideBar />
            <div className={style.wrap}>
            <div className={style.page}>
                <div className={style.top}>
                    <img className={style.image} src='"https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/logo_on0pc8.png'/>
                    <div className={style.userName}>닉네임</div>
                    <p className={style.userMbti}>ENFP</p>
                    <button className={style.edit}>edit</button>
                    <button className={style.logout}>Logout</button>
                    <p className={style.userEmail}> 1234@test.com </p>
                </div>
                <div className={style.line}
                        style={{
                            width: "25%",
                            borderBottom: "1px solid #aaa",
                            lineHeight: "0.1em",
                            margin: "10px 0 20px",
                        }}
                    ></div>
                <div className={style.bottom}>
                    <div className={style.userSummary}>관심사</div>
                    <div className={style.userSummary} /* 클릭 시 글 페이지로 이동? */>방문한 장소 수</div> 
                    <div className={style.userSummary} /* 클릭 시 북마크 페이지로 이동 */>즐겨찾기</div>
                </div>
            </div>
        </div>
        </>
        
    );
}

