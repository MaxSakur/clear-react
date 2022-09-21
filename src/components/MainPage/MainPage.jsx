import React from 'react'
import CardsList from '../CardsList'
import PracticeCardsList from '../PracticeCardsList'
// import PracticeLabel from '../PracticeLabel/PracticeLabel'
import style from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={style['main-page']}>
      <h1>MainPage</h1>
      {/* <PracticeLabel style={{ 'margin-left': '40px' }} /> */}
      <div className={style['main-page__wrapper']}>
        <CardsList />
        {/* <PracticeCardsList />
        <textarea
          type="text"
          className={StyleSheet}
          placeholder='Write some sentences to practice the words you learn...'
        /> */}
      </div>

    </div>

  )
}