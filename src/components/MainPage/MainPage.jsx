import React from 'react'
import { useSelector } from 'react-redux'
import { useWindowSize } from '../../hooks'
import CardsList from '../CardsList'
import PracticeCardsList from '../PracticeCardsList'
import { PracticeLabel } from '../UI'

import style from './MainPage.module.scss'

export const MainPage = () => {

  const categoryList = useSelector(store => store.categoryList.categories)
  const activeCards = useSelector(store => store.categoryList.activeCategoryIndex)

  const title = categoryList.map((cat) => cat.name)

  return (
    <div className={style['main-page']}>
      <div className={style['main-page__title']}>
        {title[activeCards] !== undefined ? title[activeCards] : title[0]}
      </div>
      <div className={style['main-page__wrapper']}>
        <CardsList />
      </div>

    </div>

  )
}