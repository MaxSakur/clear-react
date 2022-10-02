import React from 'react'
import { useState } from 'react'
import { ADD_NEW_WORD, ADD_TRANSLATE } from '../../assets/constants'
import styles from './Card.module.scss'

export const Card = ({ title }) => {

  const [wordValue, setWordValue] = useState(title)
  const [translateValue, setTranslateValue] = useState('')
  const [frontCardSide, setFrontCardSide] = useState(true)

  const changeFrontCardSide = () => {
    setFrontCardSide(frontCardSide => !frontCardSide)
  }

  const editFrontWord = (e) => {
    setWordValue(e.target.value)
  }
  const editTranslateWord = (e) => {
    setTranslateValue(e.target.value)
  }

  // const categoryList = useSelector(store => store.categoryList.categories)
  // const actuallyIndex = useSelector(state => state.categoryList.activeCategoryIndex)

  // const newArr = (arr) => arr.map(el => {
  //   return {
  //     ...el,
  //     data: el.data.map((word, i) => {
  //       if (word === words[i]) return words[i]
  //       else return wordValue
  //     }),
  //     translate: el.translate.map(translate => {
  //       return translate
  //     })
  //   }
  // })
  // console.log(newArr(categoryList))

  return (
    <div className={styles.wrapper}>
      <div
        className={styles[frontCardSide ? 'cardCorner' : 'cardCorner_active']}
        onClick={changeFrontCardSide}>
      </div>
      <div className={styles[frontCardSide ? 'card' : 'card_active']}>
        <input
          type="text"
          value={wordValue}
          onChange={editFrontWord}
          className={styles.cardInput}
          placeholder={ADD_NEW_WORD}
        />
      </div>
      <div className={styles[frontCardSide ? 'cardTranslate' : 'cardTranslate_active']}>
        <input
          type="text"
          value={translateValue}
          onChange={editTranslateWord}
          className={styles.cardTranslateInput}
          placeholder={ADD_TRANSLATE}
        />
      </div>
    </div >
  )
}