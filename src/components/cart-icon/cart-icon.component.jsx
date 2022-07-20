import { useContext } from 'react'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'
import { CartContext } from '../../context/cart.context.jsx'


const CartIcon = () => {
  const { cartState, setCartState, cartItems } = useContext(CartContext)

  const toggleCartState = () => setCartState(!cartState);

  return (
    <CartIconContainer onClick={toggleCartState}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{ cartItems.reduce((accumulator, currentElement) => accumulator + currentElement.quantity, 0)}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
