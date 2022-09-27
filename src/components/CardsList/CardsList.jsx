import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import styles from './CardsList.module.scss'

export const CardsList = () => {

  const categoryList = useSelector(store => store.categoryList.categories)
  const activeCards = useSelector(store => store.categoryList.activeCategoryIndex)

  const wordsArray = categoryList.map((cat) => cat.data)

  return (
    <>
      {wordsArray[activeCards] !== undefined ?
        wordsArray[activeCards].map((word, index) => <Card key={index + word} title={word} />) :
        wordsArray[0]}
    </>
  )
}