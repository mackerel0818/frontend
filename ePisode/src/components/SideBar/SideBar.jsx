import React from 'react'
import styles from './SideBar.module.css'
import { Link } from 'react-router-dom'

import { MdLocalParking } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TbLocationPin } from 'react-icons/tb'
import { FiTable } from 'react-icons/fi'
import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const navigate = useNavigate()

  const profileClick = () => {
    navigate('/mypage')
  }
  return (
    <div className={styles.sidebar}>
      <div>
        <Link to={'/map'}>
          <MdLocalParking className={styles.home} />
        </Link>

        <button className={styles.btn}>
          <HiSearch className={styles.btn_icon} />
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
