import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerone}>TECHSCAPADES</div>
      <div className={styles.headertwo}>Africa | Kenya | Technology & Information | Climate Change | Public Policy
      </div>
    </div>
  )
}

export default Header