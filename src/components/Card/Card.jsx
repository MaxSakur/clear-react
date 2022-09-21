import React from 'react'
import styles from './Card.module.scss'

export const Card = () => {
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['card-corner']}></div>
        <input type="text" placeHolder='Add new word...' />
      </div>
    </>
  )
}