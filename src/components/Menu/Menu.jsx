import React from 'react'
import styles from './Menu.module.scss'

import { CategoryList } from '../CategoryList/CategoryList'
import Logo from '../Logo/Logo'
import Back from '../Back/Back'
import PracticeLabel from '../PracticeLabel/PracticeLabel'




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

