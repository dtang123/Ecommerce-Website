import { createContext, useState } from 'react'

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) => item.id === itemToAdd.id ?
    {...item, quantity: item.quantity + 1}
    : item)
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}


export const CartContext = createContext({
  cartState: false,
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {}
  }
)

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }


  const value = {cartState, setCartState, cartItems, addItemToCart}

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
};
