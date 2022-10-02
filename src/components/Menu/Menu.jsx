import React from 'react'

import styles from './Menu.module.scss'

export const Menu = ({ children }) => {
  return (
    <div className={styles.menuWrapper}>
      {children}
    </div >
  )
}