import React from 'react'
import { PAGE_NOT_FOUND } from '../../assets/constants'
import styles from './Notfoundpage.module.scss'

export const Notfoundpage = () => {
  return (
    <div className={styles['page-not-found']}>
      <div className={styles['page-not-found__title']}>{PAGE_NOT_FOUND}</div>
    </div>
  )
}