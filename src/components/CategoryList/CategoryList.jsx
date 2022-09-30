import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";
import Modal from "../Modal";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import { UpArrow, DownArrow, UpArrowDisabled, DownArrowDisabled } from "../UI";
import styles from "./CategoryList.module.scss";


export const CategoryList = () => {

  const [startArray, setStartArray] = useState(0)

  const categoryList = useSelector(store => store.categoryList.categories)
  // не уверен за этот подход из-за производительности тк меняем индексы у всех элементов массива
  const filteredCategotyList = categoryList.slice(startArray)

  // Slice filteredCategotyList
  const incrementIndexArray = () => {
    setStartArray(prev => prev + 1)
  }

  const decrementIndexArray = () => {
    setStartArray(prev => prev - 1)
  }

  // Modal view
  const [modalView, setModalView] = useState(false)
  const changeModalView = () => {
    setModalView(prev => !prev)
  }

  const upArrowConditions = filteredCategotyList[0] && filteredCategotyList[0].id === 0

  return (
    <>
      {modalView ? <Modal closeModal={changeModalView} /> : null}
      <div className={styles["categoryList"]}>
        <UpArrow
          color={upArrowConditions ? 'transparent' : '#95AABB'}
          onClick={decrementIndexArray}
        />
        <div className={styles.categoryList_overflow}>
          <div className={styles.categoryList_wrapper}>
            {filteredCategotyList.map((category, index) =>
              <CategoryItem
                key={index + category.id}
                name={category.name}
                index={category.id}
              />
            )}
          </div>
        </div>
        {
          filteredCategotyList.length > 5
            ?
            <DownArrow
              onClick={incrementIndexArray}
            />
            : <DownArrowDisabled />
        }
        <div
          onClick={() => { changeModalView() }}
          className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}
        </div>
      </div>
    </>
  );
};

// Почему без filteredCategotyList[0] === undefined при вервом рендере ломается приложение ???
// Обработать случай отображения, если массив пустой