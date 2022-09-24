import React, { useState } from 'react'
import { INNITIAL_CARD_NAME } from '../../assets/constants'
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ name, isActive }) => {

  const [categoryName, setCategoryName] = useState(name)
  const changCategoryName = e => setCategoryName(e.target.value)

  return (
    <input
      className={styles[isActive ? 'category-input_active' : 'category-input']}
      type="text"
      value={categoryName}
      onChange={changCategoryName} />
  )
}