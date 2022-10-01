import React from 'react'
import { useState } from 'react'
import { SAVE } from '../../assets/constants'
import styles from './Card.module.scss'

export const Card = ({ title }) => {

  const [wordValue, setWordValue] = useState(title)
  const [translateValue, setTranslateValue] = useState('')
  const [frontCardSide, setFrontCardSide] = useState(true)


  const changeFrontCardSide = () => {
    setFrontCardSide(prev => !prev)
  }

  const editFrontWord = (e) => {
    setWordValue(e.target.value)
  }


  return (
    <div
      className={styles['wrapper']}>
      <div
        className={styles[frontCardSide ? 'card-corner' : 'card-corner_active']}
        onClick={() => { changeFrontCardSide(frontCardSide) }}></div>
      <div className={styles[frontCardSide ? 'card' : 'card_active']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          value={wordValue}
          onChange={editFrontWord}
          className={styles['card-input']}
          placeholder='Add new word...'
        />
      </div>
      <div className={styles[frontCardSide ? 'card-translate' : 'card-translate_active']}>
        {/* <div className={styles['card-corner']}></div> */}
        <input
          type="text"
          value={translateValue}
          onChange={(e) => setTranslateValue(e.target.value)}
          className={styles['card-translate-input']}
          placeholder='Add translate...'
        />
      </div>
    </div >
  )
}