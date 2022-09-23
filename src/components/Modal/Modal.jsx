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
          type="text"
          placeholder='Enter the category name...'
        />
        <div>
          <button>Close</button>
          <button>Ok</button>
        </div>
      </div>
    </div>
  )
}