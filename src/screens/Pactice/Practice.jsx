import React from 'react'
import MainContainer from '../../components/MainContainer'
import { MainPage } from '../../components/MainPage/MainPage'
import Menu from '../../components/Menu'
import styles from './Practice.module.scss'

export const Practice = () => {
  return (
    <MainContainer>
      <Menu />
      <MainPage />
    </MainContainer>

  )
}