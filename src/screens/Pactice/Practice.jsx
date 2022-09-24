import React from 'react'
import PracticeLabel from '../../components/PracticeLabel/PracticeLabel'
import PracticeCardsList from '../../components/PracticeCardsList'
import TextArea from '../../components/TextArea'

import styles from './Practice.module.scss'

export const Practice = () => {
  return (
    <>
      <div className={styles['practice__label']}>
        <PracticeLabel />
      </div>
      <PracticeCardsList />
      <div
        className={styles['practice__wrapper']}>
        <TextArea />
      </div>
    </>
  )
}