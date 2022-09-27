import React from 'react'
import { useWindowSize } from '../../hooks'
import CardsList from '../CardsList'
import PracticeCardsList from '../PracticeCardsList'
import { PracticeLabel } from '../UI'

import style from './MainPage.module.scss'


export const MainPage = () => {
  const [width, height] = useWindowSize()
  return (
    <div className={style['main-page']}>
      {width > 1800
        ? <PracticeLabel style={{ 'marginLeft': '40px', 'marginBottom': '20px' }} />
        : <div className={style['main-page__title']}>MainPage</div>
      }

      <div className={style['main-page__wrapper']}>
        {width > 2000
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