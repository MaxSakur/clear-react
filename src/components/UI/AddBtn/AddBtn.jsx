import * as React from "react"
import styles from './AddBtn.module.scss'

const AddBtn = ({ onClick, children }) => (
  <div
    onClick={onClick}
    className={styles.addBtn}>
    {children}
  </div>
)

export default AddBtn