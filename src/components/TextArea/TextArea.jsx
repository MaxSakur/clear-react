import * as React from "react"
import styles from './TextArea.module.scss'

export const TextArea = () => {
  return (
    <div>
      <textarea
        className={styles['text-area']}
        type="text"
        placeholder='Write some sentences to practice the words you learn...'
      />
    </div>
  )
}
export default TextArea