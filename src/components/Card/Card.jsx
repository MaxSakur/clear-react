import React from 'react'
import { useState } from 'react'
import styles from './Card.module.scss'

export const Card = ({ title }) => {

  const [wordValue, setWordValue] = useState(title)
  const [translateValue, setTranslateValue] = useState('')

  return (
    <div className={styles['wrapper']}>
      <div className={styles['card-corner']}></div>
      <div className={styles['card']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          value={wordValue}
          onChange={(e) => setWordValue(e.target.value)}
          className={styles['card-input']}
          placeholder='Add new word...' />
      </div>
      <div className={styles['card-translate']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          value={translateValue}
          onChange={(e) => setTranslateValue(e.target.value)}
          className={styles['card-translate-input']}
          placeholder='Add translate...' />
      </div>
    </div >
  )
}