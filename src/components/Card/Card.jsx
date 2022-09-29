import React from 'react'
import { useState } from 'react'
import styles from './Card.module.scss'

export const Card = ({ title }) => {

  const [wordValue, setWordValue] = useState(title)
  const [translateValue, setTranslateValue] = useState('')
  const [frontCardSide, setFrontCardSide] = useState(true)

  const changeFrontCardSide = () => {
    setFrontCardSide(prev => !prev)
  }

  return (
    <div
      className={styles['wrapper']}>
      <div
        onClick={() => { changeFrontCardSide(frontCardSide) }}
        className={styles[frontCardSide ? 'card-corner' : 'card-corner_active']}></div>
      <div className={styles[frontCardSide ? 'card' : 'card_active']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          value={wordValue}
          onChange={(e) => setWordValue(e.target.value)}
          className={styles['card-input']}
          placeholder='Add new word...' />
      </div>
      <div className={styles[frontCardSide ? 'card-translate' : 'card-translate_active']}>
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