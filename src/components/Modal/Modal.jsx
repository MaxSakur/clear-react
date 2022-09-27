import React from 'react'
import style from './Modal.module.scss'

export const Modal = ({ children, visible, setVisible }) => {

  // const rootClasses = ['modal']
  // if (visible) rootClasses.push('active')

  // const modalActiveStyle = `${visible} ? ${style.modal} : ${style.modal}`
  return (
    <div className={style.modal}>
      <div className={style['modal-content']}>
        <input
          className={style['modal-input']}
          type="text"
          placeholder='Enter the category name...'
        />
        <div>
          <button className={style['modal-btn']}>Close</button>
          <button className={style['modal-btn']}>Ok</button>
        </div>
      </div>
    </div>
  )
}