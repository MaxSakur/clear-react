import React, { useState } from "react";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import CategoryItem from "../CategoryItem";
import Modal from "../Modal";
import { AddBtn, DownArrow, UpArrow } from "../UI";
import styles from "./VerticalCarousel.module.scss";


export const VerticalCarousel = ({ itemsArray = [], itemHeight = 0, maxItemsCount = 0 }) => {

  // Modal view
  const [modalView, setModalView] = useState(false)
  const changeModalView = () => { setModalView(modalView => !modalView) }

  const [startArray, setStartArray] = useState(0)

  const carouselItemHeight = itemHeight;

  const carouselContainerVisibleHeight = itemsArray.length > maxItemsCount
    ?
    carouselItemHeight * maxItemsCount
    :
    carouselItemHeight * itemsArray.length

  // const carouselConditions = itemsArray.length > maxItemsCount
  // const carouselContainerVisibleHeight = carouselItemHeight * carouselConditions ? maxItemsCount : itemsArray.length
  // debugger


  // For arrows styles
  const inactiveUpArrow = startArray === 0
  const inactiveDownArrow = startArray >= (itemsArray.length - maxItemsCount) * carouselItemHeight

  const translateUP = () => {
    if (inactiveUpArrow) return
    setStartArray(startArray => startArray - carouselItemHeight)
  }
  const translateDown = () => {
    if (inactiveDownArrow) return
    else setStartArray(startArray => startArray + carouselItemHeight)
  }

  return (
    <>
      {modalView ? <Modal closeModal={changeModalView} /> : null}
      <div className={styles.verticalCarouselContainer}>
        <UpArrow
          color={inactiveUpArrow ? 'transparent' : '#95AABB'}
          style={inactiveUpArrow ? 'upArrow_inactive' : 'upArrow'}
          onClick={translateUP}
        />
        <div style={{ height: carouselContainerVisibleHeight, overflow: 'hidden' }}>
          <div style={{ transform: `translateY(-${startArray}px)` }}>
            <ul>
              {itemsArray.map((category, index) => {
                return (
                  <li
                    key={index + category.id}
                    style={{ height: carouselItemHeight }} >
                    <CategoryItem
                      category={category}
                      index={index}
                      id={category.id}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <DownArrow
          color={inactiveDownArrow ? 'transparent' : '#95AABB'}
          style={inactiveDownArrow ? 'downArrow_inactive' : 'downArrow'}
          onClick={translateDown}
        />
        <AddBtn onClick={changeModalView}>{ADD_NEW_CATEGORY}</AddBtn>
      </div>
    </>
  );
};