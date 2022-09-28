import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveCategoryAC } from '../../store/reducers/categoryReducer';
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ name, index }) => {

  const [categoryName, setCategoryName] = useState(name)
  const actuallyIndex = useSelector(state => state.categoryList.activeCategoryIndex)

  const changCategoryName = e => setCategoryName(e.target.value)

  const dispatch = useDispatch()
  const changeActiveCategory = (i) => {
    dispatch(updateActiveCategoryAC(i))
  }

  return (
    <div
      className={styles[index !== actuallyIndex ?
        'input__wrapper' :
        'input__wrapper_active']}
      onClick={() => changeActiveCategory(index)}>
      <input
        className={styles[index !== actuallyIndex ?
          'category-input' :
          'category-input_active']}
        type="text"
        value={categoryName}
        onChange={changCategoryName} />
    </div>
  )
}

// добавить правку массивов при изменении инпутов