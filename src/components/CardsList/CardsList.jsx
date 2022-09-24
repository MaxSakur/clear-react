import React from 'react'
import { Card } from '../Card/Card'
import styles from './CardsList.module.scss'

import { cardsData } from '../../data'

export const CardsList = ({ categoryID }) => {
  console.log(categoryID);
  return (
    <>
      {cardsData.filter(card =>
        card.categoryID === categoryID).map(card =>
          (<Card key={card.id} value={card} />))}
    </>
  )
}