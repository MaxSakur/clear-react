import React from "react";
import CategoryItem from "../CategoryItem";
import { useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";
import { ADD_NEW_CATEGORY } from "../../assets/constants";
import { UpArrow, DownArrow } from "../UI";

export const CategoryList = () => {

  const categoryList = useSelector(store => store.categoryList.categories)
  console.log(categoryList);

  return (
    <div className={styles["category-list"]}>
      {categoryList.length > 5 ? <UpArrow /> : null}
      <div className={styles["category-list__overflow"]}>
        <div className={styles["category-list__wrapper"]}>
          {categoryList.map((category, index) =>
            <CategoryItem
              key={index + category.id}
              name={category.name}
              index={category.id}
            />
          )}
        </div>
      </div>
      {categoryList.length > 5 ? <DownArrow /> : null}
      <div className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}</div>
    </div>
  );
};
