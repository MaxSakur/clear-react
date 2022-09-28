import React from 'react'
import { Card } from '../Card/Card'
import styles from './CardsList.module.scss'

export const CardsList = ({ wordsArray, activeCards }) => {

  console.log(wordsArray[9]);
  console.log(activeCards);
  return (
    <>
      {wordsArray[activeCards] !== undefined ?
        wordsArray[activeCards].map((word, index) => <Card key={index + word} title={word} />) :
        wordsArray[0]}
    </>
  )
}