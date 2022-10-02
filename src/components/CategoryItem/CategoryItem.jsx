import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/categoryReducer';
import { addCategoryListToLocalStorage } from '../../utils/localStorage'
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ category, index, id }) => {

  const dispatch = useDispatch()
  const [categoryName, setCategoryName] = useState(category.name)
  const categoryList = useSelector(store => store.categoryList.categories)
  const actuallyIndex = useSelector(state => state.categoryList.activeCategoryIndex)

  const updateCategoryList = (arr, id, name) => arr.map(el => el.id === id ? { ...el, name: name } : el);

  const changeName = (e) => {
    setCategoryName(e.target.value)
  }

  const changeCategoryName = () => {
    const updatedCategoryList = updateCategoryList(categoryList, id, categoryName)
    if (Array.isArray(updatedCategoryList) && updatedCategoryList.length > 0) {
      dispatch(updateCategoriesAC(updatedCategoryList))
      addCategoryListToLocalStorage(updatedCategoryList)
    }
    else {
      return
    }
  }

  const changeActiveCategory = (i) => {
    dispatch(updateActiveCategoryAC(i))
  }

  return (
    <div
      className={styles[index !== actuallyIndex ?
        'inputWrapper' :
        'inputWrapper_active']}
      onClick={() => changeActiveCategory(index)}>
      <input
        className={styles[index !== actuallyIndex ?
          'categoryInput' :
          'categoryInput_active']}
        type="text"
        value={categoryName}
        onChange={changeName}
        onBlur={changeCategoryName} />
    </div>
  )
}

// добавить правку массивов при изменении инпутов