import React from 'react'
import styles from './MainPage.module.scss'

export const MainPage = ({ children }) => {
  return (
    <div className={styles['main-page']}>{children}</div>
  )
}