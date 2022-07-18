import { createContext, useState } from 'react'


export const CartContext = createContext({
  cartState: false,
  setCartState: () => {}
  }
)

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false)
  const value = {cartState, setCartState}

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
};
