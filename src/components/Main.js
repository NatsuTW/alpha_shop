import Progress from './Main/Progress.js'
import Cart from './Main/Cart.js'

import styles from "./Main.module.css"

export default function Main() {
  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <Progress />
        <Cart />
      </div>
    </main>
  )
}