import React from 'react'
import CategoryList from '../CategoryList'
import { Back, Logo, PracticeLabel } from '../UI'

import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <div className={styles['menu-wrapper']}>
      <Logo />
      <CategoryList />
      <PracticeLabel style={{ cursor: 'pointer' }} />
      <Back style={{ cursor: 'pointer' }} />
    </div >
  )
}

