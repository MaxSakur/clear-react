import React from 'react'
import { PracticeCard } from '../PracticeCard/PracticeCard'

import styles from './PracticeCardsList.module.scss'

export const PracticeCardsList = () => {
  return (
    <div className={styles['practice-cards-list__wrapper']}>
      <PracticeCard />
      <PracticeCard />
      <PracticeCard />
      <PracticeCard />
      <PracticeCard />
      <PracticeCard />
    </div>
  )
}