import { ReactComponent as PlusBtn } from '../../icons/plus.svg'
import { ReactComponent as MinusBtn } from '../../icons/minus.svg'

import styles from "./Cart.module.css"

const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function ProductList() {
  const productItems = products.map(product =>
    <div className = {styles.product__container} key={product.id}>
      <img className={styles.product__image} src={product.img} alt={product.name} image/>
      <div className={styles.product__info}>
        <div className={styles.product__name}>{product.name}</div>
        <div className={styles.product__control__container}>
          <div className={styles.product__control}>
            <PlusBtn 
              className={styles.product__control__btn}/>
              <span className={styles.product__count}>{product.quantity}</span>
            <MinusBtn
              className={styles.product__control__btn}/>
          </div>
        </div>
        <div className={styles.product__price}>${product.price}</div>
      </div>
    </div> 
    )
  return (
    <section className={styles.product__list}>{productItems}</section>
  )
}

export default function Cart() {
  return(
      <section className={styles.cart__container}>
        <h3 className={styles.cart__title}>購物籃</h3>
        <ProductList />
        <section className={styles.cart__info}>
          <div className={styles.cart__text}>運費</div>
          <div className={styles.cart__price}>免費</div>
        </section>
        <section className={styles.cart__info}>
          <div className={styles.cart__text}>小計</div>
          <div className={styles.cart__price}>$400</div>
        </section>
      </section>
  )
}


