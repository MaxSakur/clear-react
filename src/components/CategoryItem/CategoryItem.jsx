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

  const updateCategoryList = (arr, id, name) => arr.map(n => n.id === id ? { ...n, name: name } : n);

  const changeName = (e) => {
    setCategoryName(e.target.value)
  }

  const changeCategoryName = () => {
    const updatedCategoryList = updateCategoryList(categoryList, id, categoryName)
    dispatch(updateCategoriesAC(updatedCategoryList))
    addCategoryListToLocalStorage(updatedCategoryList)
  }

  const changeActiveCategory = (i) => {
    dispatch(updateActiveCategoryAC(i))
  }

  // console.log(categoryList[index]);

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
        onChange={changeName}
        onBlur={changeCategoryName} />
    </div>
  )
}

// добавить правку массивов при изменении инпутов