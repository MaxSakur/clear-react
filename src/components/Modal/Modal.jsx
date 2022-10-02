import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from '../../assets/constants'
import { updateCategoriesAC } from '../../store/reducers/categoryReducer'
import { addCategoryListToLocalStorage } from '../../utils/localStorage'
import style from './Modal.module.scss'

export const Modal = ({ closeModal }) => {

  const dispatch = useDispatch()

  const categoryList = useSelector(store => store.categoryList.categories)
  const [inputText, setInputText] = useState('')
  const clearArray = new Array(6).fill('')

  // Adding a new category
  const addNewCategory = (title) => {
    const newCategory = {
      id: categoryList.length,
      name: title.trim(),
      data: clearArray,
      translate: clearArray,
      practice: "",
    }
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categoryList, newCategory]
      dispatch(updateCategoriesAC(updatedCategoryList))
      addCategoryListToLocalStorage(updatedCategoryList)
      setInputText('');
      closeModal();
    }
    else {
      closeModal();
      return
    }
  }

  const avoidEmptyClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={closeModal}
      className={style.modal}>
      <div
        onClick={avoidEmptyClick}
        className={style.modal_content}>
        <input
          className={style.modal_input}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />
        <div>
          <button
            onClick={closeModal}
            className={style.modal_btn}>{CLOSE}
          </button>
          <button
            onClick={() => addNewCategory(inputText)}
            className={style.modal_btn}>{ADD}
          </button>
        </div>
      </div>
    </div>
  )
}