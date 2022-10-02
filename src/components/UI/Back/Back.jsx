import * as React from "react"
import { BACK } from "../../../assets/constants"
import styles from './Back.module.scss'

const Back = (props) => (
  <div className={styles.back}>
    <svg
      width={12}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.368.364c-1.334-.2-2.885.623-3.465 1.841L1.86 10.698c-.475.998.025 1.94 1.118 2.105l1.863.28c.546.083 1.181-.255 1.418-.753l4.474-9.397C11.313 1.716 10.7.565 9.368.364Z"
        fill="#2E3337"
      />
      <path
        d="M9.368 23c-1.334.201-2.885-.623-3.465-1.841l-4.176-8.772c-.475-.998.026-1.94 1.118-2.104l.874-.132c1.093-.165 2.363.51 2.838 1.507l4.176 8.773c.58 1.217-.032 2.368-1.365 2.569Z"
        fill="#2E3337"
      />
    </svg>
    <div className={styles.back_title}>{BACK}</div>
  </div>
)

export default Back