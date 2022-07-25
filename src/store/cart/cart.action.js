import CART_ACTION_TYPES from './cart.types'
import { createAction } from '../../utils/reducer/reducer.utils'

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) => item.id === itemToAdd.id ? {
        ...item,
        quantity: item.quantity + 1
      } :
      item)
  }

  return [...cartItems, {
    ...itemToAdd,
    quantity: 1
  }];
}

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) => item.id === itemToRemove.id ? {
      ...item,
      quantity: item.quantity - 1
    } :
    item)
}

const clearCartItem = (cartItems, itemToRemove) =>
 cartItems.filter((item) => item.id !== itemToRemove.id);


export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setCartState = (newState) => {
  return createAction(CART_ACTION_TYPES.SET_CART_STATE, newState);
}
