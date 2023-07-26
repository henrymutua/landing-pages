import React from 'react'
import styles from './Synopsis.module.css'

const Synopsis = () => {
  return (
    <div className={styles.synopsis}>
      <div className={styles.title}>Research</div>
      <div className={styles.subtitle}>AI STILL HAS A LONG WAY TO BE FULLY DEVELOPED</div>
      <div className={styles.paragraph}>
        <div className={styles.textcontainer}>
          <div className={styles.titletwo}>
            <div>Professor Okello</div>
            <div> 30 January 2023</div>
          </div>
          <div className={styles.paragraphtext}>
          <div>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </div>
          <div>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</div>
          <div>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</div>
          </div>
        </div>
        <div> 
        <img
        src = '/ai.png'
        alt= 'a visual representation of ai'
        height={1000}
        width={900}
        className={styles.imagecontainer}/></div>
      </div>
    </div>
  )
}

export default Synopsis