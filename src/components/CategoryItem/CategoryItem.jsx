import React from "react";
import styles from "./CategoryItem.module.scss";

export const CategoryItem = ({
  isActive,
  value,
  onChange,
  onClick,
  onBlur,
}) => {
  const categoryIsActive = isActive
    ? styles.inputWrapper
    : styles.inputWrapper_active;

  const categoryInputStyles = isActive
    ? styles.categoryInput
    : styles.categoryInput_active;

  return (
    <div className={categoryIsActive} onClick={onClick}>
      <input
        className={categoryInputStyles}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
