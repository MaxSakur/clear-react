import React from 'react'
import { useWindowSize } from '../../hooks'
import CardsList from '../CardsList'
import PracticeCardsList from '../PracticeCardsList'
import PracticeLabel from '../PracticeLabel/PracticeLabel'
import style from './MainPage.module.scss'


export const MainPage = () => {
  const [width, height] = useWindowSize()
  return (
    <div className={style['main-page']}>
      {width > 1200
        ? <PracticeLabel style={{ 'marginLeft': '40px', 'marginBottom': '20px' }} />
        : <h1>MainPage</h1>
      }

      <div className={style['main-page__wrapper']}>
        {width > 1200
          ?
          <>
            <PracticeCardsList />
            <textarea
              type="text"
              placeholder='Write some sentences to practice the words you learn...'
            />
          </>
          :
          <CardsList />}
      </div>

    </div>

  )
}