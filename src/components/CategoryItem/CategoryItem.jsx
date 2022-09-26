import React from 'react'
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ name }) => {
  return (
    <button className={styles['categoryItem']}>{name}</button>
  )
}