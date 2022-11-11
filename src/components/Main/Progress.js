import ProgressStep from "./Progress/ProgressStep";
import ProgressControl from "./Progress/ProgressControl";
import StepOne from "./Progress/StepOne";
// 先渲染Step One的表單，後續會實作換頁功能

import styles from "./Progress.module.css"

export default function Progress() {
  return (
    <section className={styles.progress__container}>
      <h2 className={styles.progress__title}>結帳</h2>
      <ProgressStep />
      <StepOne />
      <ProgressControl />
    </section>
  )
}