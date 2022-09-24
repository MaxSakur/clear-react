import React, { useState } from 'react'
import { ADD_TRANSLATE, ADD_NEW_WORD } from '../../assets/constants'
import styles from './Card.module.scss'

export const Card = ({ value = '' }) => {

  const [cardWord, setCardWord] = useState(value.word)
  const [cardTranslate, setCardTranslate] = useState(value.translate)

  return (
    <div className={styles['wrapper']}>
      <div
        className={styles['card-corner']}>
      </div>

      <div className={styles['card']}>
        <input
          type="text"
          className={styles['card-input']}
          placeholder={ADD_NEW_WORD}
          value={cardWord}
          onChange={(e) => { setCardWord(e.target.value) }} />
      </div>

      <div className={styles['card-translate']}>
        <input
          type="text"
          className={styles['card-translate-input']}
          placeholder={ADD_TRANSLATE}
          value={cardTranslate}
          onChange={(e) => { setCardTranslate(e.target.value) }} />
      </div>

    </div >
  )
}