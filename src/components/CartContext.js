import { createContext } from 'react';
import { useState } from 'react';

const productsData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  },
]

const CartContext = createContext()

function CartContextProvider({ children }) {
  const [currentProducts, setCurrentProducts] = useState(productsData)
  
  const total = function isTotal() {
    let total = null;
    currentProducts.map(product => total = total + product.price * product.quantity)
    return total
  }

  return(
    <CartContext.Provider value={{currentProducts, setCurrentProducts, total}}>
      { children }
    </CartContext.Provider>
  )
}

export {CartContext, CartContextProvider}