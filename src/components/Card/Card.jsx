import React from 'react'
import styles from './Card.module.scss'

export const Card = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['card-corner']}></div>
      <div className={styles['card']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          className={styles['card-input']}
          placeholder='Add new word...' />
      </div>
      <div className={styles['card-translate']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input type="text" className={styles['card-translate-input']} placeholder='Add translate...' />
      </div>
    </div >
  )
}