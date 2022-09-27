import React from "react";
import CategoryItem from "../CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import { UpArrow, DownArrow } from "../UI";

export const CategoryList = () => {

  const categoryList = useSelector(store => store.categoryList.categories)

  return (
    <div className={styles["category-list"]}>
      <UpArrow />
      {categoryList.map((category, index) => <CategoryItem
        key={index + category.id}
        name={category.name}
        index={category.id}
      />)}
      <DownArrow />
      <div className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}</div>
    </div>
  );
};
