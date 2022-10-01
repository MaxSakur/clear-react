import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Back, Burger, Logo, PracticeLabel } from '../UI'
import CardsList from '../CardsList'
import Menu from '../Menu'
import Carousel from '../Carousel'

import style from './MainPage.module.scss'

export const MainPage = ({ width }) => {

  const [burgerView, setBurgerView] = useState(false)
  const changeBurgerView = () => {
    setBurgerView(prev => !prev)
  }

  const categoryList = useSelector(store => store.categoryList.categories)
  const activeCards = useSelector(store => store.categoryList.activeCategoryIndex)

  const title = categoryList.map((cat) => cat.name)
  const wordsArray = categoryList.map((cat) => cat.data)

  return (
    <div className={style['main-page']}>
      {
        width < 993
          ?
          <div className={style['main-page__burger']}>
            <Logo />
            <Burger changeView={changeBurgerView} />
          </div>
          : null
      }
      {
        burgerView && width < 993 ?
          <div className={style['burger-wrapper']}>
            <Menu>
              <Carousel />
              <PracticeLabel />
              <Back />
            </Menu>
          </div> : null

      }
      <div className={style['main-page__title']}>
        {title[activeCards] !== undefined ? title[activeCards] : title[0]}
      </div>
      <div className={style['main-page__wrapper']}>
        <CardsList wordsArray={wordsArray} activeCards={activeCards} />
      </div>
    </div>
  )
}