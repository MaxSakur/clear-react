import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import CategoryItem from "../CategoryItem";
import Modal from "../Modal";
import { DownArrow, UpArrow } from "../UI";
import styles from "./Carousel.module.scss";


export const Carousel = () => {

  // Modal view
  const [modalView, setModalView] = useState(false)
  const changeModalView = () => {
    setModalView(prev => !prev)
  }

  const carouselContainerVisibleHeight = 328;
  const carouselItemHeight = 67;

  const categoryList = useSelector(store => store.categoryList.categories)

  const [startArray, setStartArray] = useState(0)

  const inactiveDownArrow = startArray >= (categoryList.length - 5) * carouselItemHeight
  const inactiveUpArrow = startArray === 0

  const translateUP = () => {
    if (inactiveUpArrow) return
    setStartArray(prev => prev - carouselItemHeight)

  }
  const translateDown = () => {
    if (inactiveDownArrow) return
    else setStartArray(prev => prev + carouselItemHeight)
  }

  console.log(startArray);

  return (
    <>
      {modalView ? <Modal closeModal={changeModalView} /> : null}
      <div className={styles.carouselContainer}>
        <div className="upArrow">
          <UpArrow
            color={inactiveUpArrow ? 'transparent' : '#95AABB'}
            onClick={translateUP}
          />
        </div>
        <div style={{ height: carouselContainerVisibleHeight, overflow: 'hidden' }}>
          <div style={{ transform: `translateY(-${startArray}px)` }}>
            <ul>
              {categoryList.map((category, index) => {
                return <li
                  key={index + category.id}
                  style={{ height: carouselItemHeight }}>
                  <CategoryItem
                    index={index}
                    name={category.name}
                  /></li>
              })}
            </ul>
          </div>
        </div>
        <div className="downArrow">
          <DownArrow
            color={inactiveDownArrow ? 'transparent' : '#95AABB'}
            onClick={translateDown}
          />
        </div>
        <div
          onClick={() => { changeModalView() }}
          className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}
        </div>
      </div>
    </>
  );
};