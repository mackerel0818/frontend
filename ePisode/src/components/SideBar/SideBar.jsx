import React from 'react'
import styles from './SideBar.module.css'
import { CgProfile } from 'react-icons/cg'
import { TbLocationPin } from 'react-icons/tb'
import { FiTable } from 'react-icons/fi'
import { HiSearch } from 'react-icons/hi'

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div>
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
      <button className={styles.btn_profile}>
        <CgProfile className={styles.btn_icon} />
      </button>
    </div>
  )
}
