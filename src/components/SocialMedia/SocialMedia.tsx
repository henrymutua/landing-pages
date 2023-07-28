import React from 'react';
import styles from './socialMedia.module.scss';
import {TwitterIcon, FacebookIcon, LinkedinIcon, RedditIcon, EmailIcon} from '../SocialMediaIcons/socialMediaIcons';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
     <div className={styles.readingTime}>60 minute read</div>
      <div className={styles.socialMediaIcons}>
        <TwitterIcon />
        <FacebookIcon/>
        <RedditIcon/>
        <LinkedinIcon/>
        <EmailIcon/>
      </div>
    </div>
  )
}

export default SocialMedia;