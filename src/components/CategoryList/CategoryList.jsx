import React from "react";
import CategoryItem from "../CategoryItem";
import { useSelector } from "react-redux";

import styles from "./CategoryList.module.scss";

import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { ADD_NEW_CATEGORY } from "../../assets/constants";

export const CategoryList = () => {
  // const testStore = useSelector(store => store)
  // console.log(testStore);
  return (
    <div className={styles["category-list"]}>
      <img className={styles["arrow"]} src={upArrow} alt="upArrow" />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <img className={styles["arrow"]} src={downArrow} alt="downArrow" />
      <div className={styles["menu-addBtn"]}>{ADD_NEW_CATEGORY}</div>
    </div>
  );
};
