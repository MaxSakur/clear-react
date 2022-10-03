import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateActiveCategoryAC,
  updateCategoriesAC,
} from "../store/reducers/categoryReducer";
import { addCategoryListToLocalStorage } from "../utils/localStorage";
import CategoryItem from "./../components/CategoryItem";

export const CategoryItemContainer = ({ category, index, id }) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(category.name);
  const { categories, activeCategoryIndex } = useSelector(
    (state) => state.categoryList
  );

  const updateCategoryList = (arr, id, name) =>
    arr.map((el) => (el.id === id ? { ...el, name: name } : el));
  const handleChangeName = (e) => setCategoryName(e.target.value);
  const changeCategoryName = () => {
    const updatedCategoryList = updateCategoryList(
      categories,
      id,
      categoryName
    );
    if (Array.isArray(updatedCategoryList) && updatedCategoryList.length > 0) {
      dispatch(updateCategoriesAC(updatedCategoryList));
      addCategoryListToLocalStorage(updatedCategoryList);
    }
  };

  const changeActiveCategory = (i) => dispatch(updateActiveCategoryAC(i));

  return (
    <CategoryItem
      isActive={index !== activeCategoryIndex}
      value={categoryName}
      onChange={handleChangeName}
      onClick={() => changeActiveCategory(index)}
      onBlur={changeCategoryName}
    />
  );
};
