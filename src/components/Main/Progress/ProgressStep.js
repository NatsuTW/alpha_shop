import styles from "./ProgressStep.module.css"
import  { ReactComponent as DoneCheck } from "../../../icons/pg-complete.svg"

function Step({currentStep, step, label}) {
  return(
    <span className={styles.progress__group}>
      <span className={currentStep >= step ? styles.progress__circle__done : styles.progress__circle__undone}>
        <span className={styles.progress__text}>
          {currentStep > step ? <DoneCheck /> : step}
        </span>
      </span>
      <span className={currentStep >= step ? styles.progress__label__done : styles.progress__label__undone}>{label}</span>
    </span>
  )
}

function ProgressBar({className}) {
  return <span className={className}></span>
} 

export default function ProgressStep({ currentStep }) {
  return (
      <section className={styles.progress__container}>
        <Step
          currentStep={currentStep}
          step={1}
          label="寄送地址"
        />
        <ProgressBar className={styles.progress__bar}/>        <Step
          currentStep={currentStep}
          step={2}
          label="運送方式"
        />
        <ProgressBar className={currentStep >= 2 ? styles.progress__bar : styles.progress__bar__undone}/>
        <Step
          currentStep={currentStep}
          step={3}
          label="付款資訊"
        />
      </section>
  )
}