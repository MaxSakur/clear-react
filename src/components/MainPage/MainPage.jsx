import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Burger, Logo, PracticeLabel } from '../UI'
import VerticalCarousel from '../VerticalCarousel'
import Card from '../Card'
import Menu from '../Menu'
import { PTACTICE_TEXTAREA_PLACEHOLDER, V_CAROUSEL_ITEM_HEIGHT, V_CAROUSEL_VISIBLE_ITEMS_QUANTITY } from '../../assets/constants'

import style from './MainPage.module.scss'

export const MainPage = ({ width, itemsArray }) => {

  const activeCategory = useSelector(store => store.categoryList.activeCategoryIndex)
  const title = itemsArray.map((cat) => cat.name)
  const wordsArray = itemsArray.map((cat) => cat.data)
  const practiceTextArray = itemsArray.map((cat) => cat.practice)

  useEffect(() => {
    const activePracticeText = practiceTextArray[activeCategory]
    setPracticeText(activePracticeText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const [practiceText, setPracticeText] = useState('')
  const [burgerView, setBurgerView] = useState(false)

  const changePracticeText = (e) => {
    setPracticeText(e.target.value)
  }

  const changeBurgerView = () => {
    setBurgerView(prev => !prev)
  }

  return (
    <div className={style.mainPage}>
      {
        width < 993
          ?
          <div className={style.mainPage_burger}>
            <Logo />
            <Burger changeView={changeBurgerView} />
          </div>
          : null
      }
      {
        burgerView && width < 993 ?
          <div className={style.burgerWrapper}>
            <Menu>
              <VerticalCarousel
                itemsQuantity={V_CAROUSEL_VISIBLE_ITEMS_QUANTITY}
                itemHeight={V_CAROUSEL_ITEM_HEIGHT}
                itemsArray={itemsArray}
              />
            </Menu>
          </div> : null

      }
      <div className={style.mainPage_title}>
        {title[activeCategory] ? title[activeCategory] : title[0]}
      </div>
      <div className={style.mainPage_wrapper}>
        {
          wordsArray[activeCategory] ?
            wordsArray[activeCategory].map((word, index) =>
              <Card
                key={index + word}
                title={word}
              />) :
            <>Массив пуст</>
        }
      </div>
      <PracticeLabel />
      <textarea
        className={style.textArea}
        placeholder={PTACTICE_TEXTAREA_PLACEHOLDER}
        value={practiceText}
        onChange={changePracticeText}
      />
    </div>
  )
}