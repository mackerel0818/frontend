import React from 'react'
import styles from './SideBar.module.css'
import { Link, useLocation } from 'react-router-dom'

import { MdLocalParking } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TbLocationPin } from 'react-icons/tb'
import { FiTable } from 'react-icons/fi'
import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const profileClick = () => {
    navigate('/map/mypage')
  }

  const handleSearch = () => {
    if (location.pathname === '/map/search') {
      navigate('/map')
    } else {
      navigate('/map/search')
    }
  }

  const searchIconStyle =
    location.pathname === '/map/search'
      ? {
          color: '#ff70a6',
          filter: 'drop-shadow(1px 1px 0.5px #ff70a7dd)',
          transform: 'scale(1.1)',
        }
      : {}

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.wrap_home}>
          <Link to={'/'}>
            <MdLocalParking className={styles.home} />
          </Link>
        </div>

        <button className={styles.btn} onClick={handleSearch}>
          <HiSearch className={styles.btn_icon} style={searchIconStyle} />
        </button>
        <button className={styles.btn}>
          <TbLocationPin className={styles.btn_icon} />
        </button>
        <button className={styles.btn}>
          <FiTable className={styles.btn_icon} />
        </button>
      </div>
      <button className={styles.btn_profile} onClick={profileClick}>
        <CgProfile className={styles.btn_icon} />
      </button>
    </div>
  )
}
