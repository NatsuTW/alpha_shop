import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { ReactComponent as PlusBtn } from '../../icons/plus.svg'
import { ReactComponent as MinusBtn } from '../../icons/minus.svg'

import styles from "./Cart.module.css"

function ProductList({ handlePlus, handleMinus, products }) {

  const productItems = products.map(product =>
    <div className={styles.product__container} key={product.id}>
      <img className={styles.product__image} src={product.img} alt={product.name} />
      <div className={styles.product__info}>
        <div className={styles.product__name}>{product.name}</div>
        <div className={styles.product__control__container}>
          <div className={styles.product__control}>
            <PlusBtn
              className={styles.product__control__btn}
              onClick={() => handlePlus(product.id)} />
            <span className={styles.product__count}>{product.quantity}</span>
            <MinusBtn
              className={styles.product__control__btn}
              onClick={() => handleMinus(product.id)} />
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
  const { currentProducts, setCurrentProducts, total } = useContext(CartContext)
 
  function handleClickPlus(id) {
    setCurrentProducts(currentProducts.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      } else {
        return product
      }
    }))
  }

  function handleClickMinus(id) {
    let newCurrentProducts = currentProducts.map(product => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    setCurrentProducts(newCurrentProducts.filter(product => product.quantity !== 0))
  }

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>
      <ProductList
        products={currentProducts}
        handlePlus={handleClickPlus}
        handleMinus={handleClickMinus} />
      <section className={styles.cart__info}>
        <div className={styles.cart__text}>運費</div>
        <div className={styles.cart__price}>免費</div>
      </section>
      <section className={styles.cart__info}>
        <div className={styles.cart__text}>小計</div>
        <div className={styles.cart__price}>{total()}</div>
      </section>
    </section>
  )
}