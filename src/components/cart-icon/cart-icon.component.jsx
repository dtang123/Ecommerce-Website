import { useDispatch, useSelector } from 'react-redux'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'
import { selectCartState, selectCartCount } from '../../store/cart/cart.selectors'
import { setCartState } from '../../store/cart/cart.action'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const cartState = useSelector(selectCartState)

  const toggleCartState = () =>dispatch(setCartState(!cartState))

  return (
    <CartIconContainer onClick={toggleCartState}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;
