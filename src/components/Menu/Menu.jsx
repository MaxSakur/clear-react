import React from 'react'
import styles from './Menu.module.scss'

import { CategoryList } from '../CategoryList/CategoryList'
import { Back, Logo, PracticeLabel } from '../UI'




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

