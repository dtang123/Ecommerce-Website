import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer.js'
import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'


export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer
});
