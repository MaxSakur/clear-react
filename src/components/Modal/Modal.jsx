import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from '../../assets/constants'
import style from './Modal.module.scss'

export const Modal = ({ close }) => {

  const categoryList = useSelector(store => store.categoryList.categories)
  const updatedCategotyList = categoryList

  const [inputText, setInputText] = useState('')

  const addNewCategory = (title) => {
    updatedCategotyList.push(
      {
        id: updatedCategotyList.length,
        name: title,
        data: ["", "", "", "", "", ""],
      }
    );
    const localCategoryList = JSON.stringify(updatedCategotyList)
    localStorage.setItem('localCategoryList', localCategoryList)
    setInputText('');
    close();
    // console.log(categoryList);
  }


  return (
    <div
      onClick={() => close()}
      className={style.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style['modal-content']}>
        <input
          className={style['modai-input']}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />
        <div>
          <button
            onClick={() => { close() }}
            className={style['modal-btn']}>{CLOSE}
          </button>
          <button
            onClick={() => { addNewCategory(inputText) }}
            className={style['modal-btn']}>{ADD}</button>
        </div>
      </div>
    </div>
  )
}