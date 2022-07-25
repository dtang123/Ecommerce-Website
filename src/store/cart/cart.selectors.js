import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectCartState = createSelector(
  [selectCartReducer],
  (cart) => cart.cartState
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulator, currentElement) => accumulator + currentElement.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
)
