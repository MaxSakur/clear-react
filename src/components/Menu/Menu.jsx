import React from 'react'
import styles from './Menu.module.scss'

import { CategoryList } from '../CategoryList/CategoryList'
import Logo from '../Logo/Logo'
import Back from '../Back/Back'
import PracticeLabel from '../PracticeLabel/PracticeLabel'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className={styles['menu-wrapper']}>
      <Logo />
      <CategoryList />
      <Link to="/practice"><PracticeLabel /></Link>
      <Link to="/"><Back /></Link>
    </div >
  )
}

