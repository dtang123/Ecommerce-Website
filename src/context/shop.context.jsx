import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json'

export const ShopContext = createContext(
  {
    products:[],

  }
)

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }
  return (<ShopContext.Provider value={value}>{ children }</ShopContext.Provider>)

}
