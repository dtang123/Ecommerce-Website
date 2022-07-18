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

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) => item.id === itemToRemove.id ?
  {...item, quantity: item.quantity - 1}
  : item)
}

const clearCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingCartItem) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems;
}


export const CartContext = createContext({
  cartState: false,
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {}
  }
)

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }


  const value = {cartState, setCartState, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart }

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
};
