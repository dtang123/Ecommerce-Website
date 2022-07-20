import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component'
import {CartContext} from '../../context/cart.context'


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()


  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map(item =>
            <CartItem id={item.id} cartItem={item}/>)
          ) : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
