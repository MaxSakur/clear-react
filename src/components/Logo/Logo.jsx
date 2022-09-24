import * as React from "react"
import { LOGO } from "../../assets/constants"
import styles from './Logo.module.scss'

const Logo = (props) => (
  <div className={styles['logo']}>
    <svg
      width={31}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={29}
        height={20}
        rx={2}
        stroke="#E5AA57"
        strokeWidth={2}
      />
      <rect x={6} y={6} width={3} height={2} rx={1} fill="#E9AC57" />
      <rect x={6} y={10} width={3} height={2} rx={1} fill="#E9AC57" />
      <rect x={6} y={14} width={3} height={2} rx={1} fill="#E9AC57" />
      <rect x={11} y={6} width={14} height={2} rx={1} fill="#E9AC57" />
      <rect x={11} y={10} width={14} height={2} rx={1} fill="#E9AC57" />
      <rect x={11} y={14} width={14} height={2} rx={1} fill="#E9AC57" />
    </svg>
    <div className={styles['logo-title']}>{LOGO}</div>
  </div>
)
export default Logo