import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveCategoryAC } from '../../store/reducers/categoryReducer';
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ name, index }) => {
  const dispatch = useDispatch()
  const changeActiveCategory = (i) => {
    dispatch(updateActiveCategoryAC(i))
    console.log(index);
  }
  return (
    <button
      className={styles['categoryItem']}
      onClick={() => changeActiveCategory(index)}
    >{name}
    </button>
  )
}