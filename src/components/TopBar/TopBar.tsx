import React from 'react';
import styles from './TopBar.module.css'

const TopBar = () => {
  return (
    <div className={styles.topbar} >
      <div className={styles.navmenu}>
        <div> ABOUT US</div>
        <div> RESEARCH</div>
        <div> NEWSLETTER</div>
        <div> EVENTS</div>
        <div> DONATE</div>
      </div>
    </div>
  )
}

export default TopBar;