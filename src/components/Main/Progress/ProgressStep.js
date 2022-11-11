import styles from "./ProgressStep.module.css"

function Step({step, label}) {
  return(
    <span className={styles.progress__group}>
      <span className={styles.progress__circle}>
        <span className={styles.progress__text}>{step}</span>
      </span>
      <span className={styles.progress__label}>{label}</span>
    </span>
  )
}

export default function ProgressStep() {
  return (
      <section className={styles.progress__container}>
        <Step
          step= {1}
          label= "寄送地址"
        />
        <span className={styles.progress__bar} data-order="1"></span>
        <Step
          step= {2}
          label= "運送方式"
        />
        <span className={styles.progress__bar} data-order="2"></span>
        <Step
          step= {3}
          label= "付款資訊"
        />
      </section>
  )
}