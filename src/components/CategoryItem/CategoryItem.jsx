import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/categoryReducer';
import { addCategoryListToLocalStorage } from '../../utils/localStorage'
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ category, index, id }) => {

  const dispatch = useDispatch()
  const [categoryName, setCategoryName] = useState(category.name)
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList)

  const updateCategoryList = (arr, id, name) => arr.map(el => el.id === id ? { ...el, name: name } : el)

  const handleChangeName = (e) => setCategoryName(e.target.value)

  const changeCategoryName = () => {
    const updatedCategoryList = updateCategoryList(categories, id, categoryName)
    if (Array.isArray(updatedCategoryList) && updatedCategoryList.length > 0) {
      dispatch(updateCategoriesAC(updatedCategoryList))
      addCategoryListToLocalStorage(updatedCategoryList)
    }
    else return
  }

  const changeActiveCategory = i => dispatch(updateActiveCategoryAC(i))

  const categoryInputStyles = index !== activeCategoryIndex ? styles.categoryInput : styles.categoryInput_active

  return (
    <div
      className={styles[index !== activeCategoryIndex ?
        'inputWrapper' :
        'inputWrapper_active']}
      onClick={() => changeActiveCategory(index)}>
      <input
        className={categoryInputStyles}
        type="text"
        value={categoryName}
        onChange={handleChangeName}
        onBlur={changeCategoryName} />
    </div>
  )
}