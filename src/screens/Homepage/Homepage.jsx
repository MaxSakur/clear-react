import React from 'react'
import { INNITIAL_CARD_NAME } from '../../assets/constants'
import CardsList from '../../components/CardsList'
import styles from './Homepage.module.scss'

export const Homepage = () => {
  return (
    <>
      <div
        className={styles['home-page__label']}>
        {INNITIAL_CARD_NAME}
      </div>
      <div
        className={styles['home-page__wrapper']}>
        <CardsList categoryID={1} />
      </div>
    </>
  )
}