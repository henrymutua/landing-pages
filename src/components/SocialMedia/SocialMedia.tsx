import React from 'react';
import styles from './SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <p>60 minute read</p>
      <div className={styles.socialMediaIcons}>
        <componentOne/>
        <componentTwo/>
        <componentThree/>
        <componentFour/>
        <componentFive/>
        <componentSix/>
      </div>
    </div>
  )
}

export default SocialMedia