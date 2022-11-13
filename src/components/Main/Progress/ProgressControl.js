import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg'

import styles from "./ProgressControl.module.css"

export default function ProgressControl({ currentStep, handleClickPrev, handleClickNext }) {
  return (
    <section className={styles.control__container}>
      <section className={styles.button__group} data-phase="address">
        <button 
        onClick ={handleClickPrev}
        disabled={currentStep === 1 && true}
        className={[styles.button__prev, styles.button].join(" ")}>
          <LeftArrow className={styles.arrow__left}/>
          <div className={styles.button_text}>上一步</div>
        </button>
        <button 
        onClick ={handleClickNext} 
        className={[styles.button__next, styles.button].join(" ")}>
          <div className={styles.button_text}>{currentStep === 3 ? '準備結帳' : '下一步'}</div>        
          {currentStep < 3 && <RightArrow className={styles.arrow__right} />}
        </button>
      </section>
    </section>
  )
}