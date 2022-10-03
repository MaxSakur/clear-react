import * as React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { DownArrow } from "../UI";

const Button = ({ onClick, children, type, icon = null, value }) => {
  if (type === "iconLeft") {
    return (
      <div onClick={onClick} className={styles.addBtn}>
        <DownArrow color="red" />
        <p>{value}</p>
      </div>
    );
  } else if (type === "iconRight") {
    return (
      <div onClick={onClick} className={styles.addBtn}>
        <p>{value}</p>
        <DownArrow color="blue" />
      </div>
    );
  }
  return (
    <div onClick={onClick} className={styles.addBtn}>
      <p>{value}</p>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
