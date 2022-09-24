import * as React from "react"
import { PTACTICE } from "../../assets/constants"
import styles from './PracticeLabel.module.scss'

const PracticeLabel = (props) => (
  <div className={styles['practice-label']}>
    <svg
      width={8}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 6h8v22H0V6ZM0 4a4 4 0 1 1 8 0v1H0V4Z" fill="#E5AA57" />
      <path d="M0 28h8l-3 3H3l-3-3Z" fill="#CA954B" />
    </svg>
    <div className={styles['practice-label-title']}>{PTACTICE}</div>
  </div>
)
export default PracticeLabel