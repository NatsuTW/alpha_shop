import ProgressStep from "./Register/ProgressStep";
import ProgressControl from "./Register/ProgressControl";
import StepOne from "./Register/StepOne";
// 先渲染Step One的表單，後續會實作換頁功能

import styles from "./Register.module.css"

export default function Register() {
  return (
    <section className={styles.register__container}>
      <h2 className={styles.register__title}>結帳</h2>
      <ProgressStep />
      <StepOne />
      <ProgressControl />
    </section>
  )
}