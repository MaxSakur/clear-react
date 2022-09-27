import React from "react";
import CategoryItem from "../CategoryItem";
import { useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import { UpArrow, DownArrow } from "../UI";
import { useState } from "react";

export const CategoryList = () => {

  const [startArray, setStartArray] = useState(0)
  const [endArray, setEndArray] = useState(5)

  const categoryList = useSelector(store => store.categoryList.categories)
  const filteredCategotyList = categoryList.slice(startArray, endArray)


  const incrementIndexArray = () => {
    if (filteredCategotyList.length < 5) return
    else {
      setStartArray(prev => prev + 1)
      setEndArray(prev => prev + 1)
    }
  }

  const decrementIndexArray = () => {
    setStartArray(prev => prev - 1)
    setEndArray(prev => prev - 1)
  }

  return (
    <div className={styles["category-list"]}>
      {
        filteredCategotyList.length >= 5
          ?
          <UpArrow
            inc={incrementIndexArray}
          />
          :
          null
      }
      <div className={styles["category-list__overflow"]}>
        <div className={styles["category-list__wrapper"]}>
          {filteredCategotyList.map((category, index) =>
            <CategoryItem
              key={index + category.id}
              name={category.name}
              index={category.id}
              start={startArray}
            />
          )}
        </div>
      </div>
      {
        filteredCategotyList[0] === undefined || filteredCategotyList[0].id === 0
          ?
          null
          :
          <DownArrow
            dec={decrementIndexArray}
          />
      }
      <div className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}</div>
    </div>
  );
};
