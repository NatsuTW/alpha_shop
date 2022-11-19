import Progress from './Main/Progress'
import Cart from './Main/Cart'
import { CartContextProvider }from './CartContext'

import styles from "./Main.module.css"

export default function Main() {
  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <CartContextProvider>
          <Progress />
          <Cart />
        </CartContextProvider>
      </div>
    </main>
  )
}