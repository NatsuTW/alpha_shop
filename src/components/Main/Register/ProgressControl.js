import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg'

import styles from "./ProgressControl.module.css"

export default function ProgressControl() {
  return (
    <section className={styles.control__container}>
      <section className={styles.button__group} data-phase="address">
        <button className={[styles.button__prev, styles.button].join(" ")}>
          <LeftArrow className={styles.arrow__left}/>
          <div className={styles.button_text}>上一步</div>
        </button>
        <button className={[styles.button__next, styles.button].join(" ")}>
          <div className={styles.button_text}>下一步</div>        
          <RightArrow className={styles.arrow__right}/>
        </button>
        {/* 確定下單的按鈕在之後換頁實作時加入 */}
      </section>
    </section>
  )
}

// 