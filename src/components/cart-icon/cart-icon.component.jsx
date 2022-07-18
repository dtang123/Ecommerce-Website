import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react'
import './cart-icon.styles.scss'
import { CartContext } from '../../context/cart.context.jsx'


const CartIcon = () => {
  const { cartState, setCartState } = useContext(CartContext)

  const toggleCartState = () => setCartState(!cartState);

  return (<div className='cart-icon-container' onClick={toggleCartState}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>)
}

export default CartIcon;
