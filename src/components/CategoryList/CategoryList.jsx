import React from 'react'
import CategoryItem from '../CategoryItem'
import { useSelector } from 'react-redux';

import upArrow from '../../assets/images/upArrow.svg'
import downArrow from '../../assets/images/downArrow.svg'
import { ADD_NEW_CATEGORY } from '../../assets/constants'

import styles from './CategoryList.module.scss'

// test data
import { categoriesData } from '../../data';

export const CategoryList = () => {
  const testStore = useSelector(store => store)

  console.log(testStore);

  return (
    <div className={styles['category-list']}>
      {categoriesData.length < 6 ? null : <img className={styles['arrow']} src={upArrow} alt="upArrow" />}
      {categoriesData.map(category => (
        <CategoryItem
          key={category.id}
          name={category.name}
          isActive={category.active}
        />))}

      {categoriesData.length < 6 ? null : <img className={styles['arrow']} src={downArrow} alt="downArrow" />}
      <div className={styles['menu-addBtn']}>{ADD_NEW_CATEGORY}</div>
    </div>
  )
}