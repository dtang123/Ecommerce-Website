import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { NavigationContainer, NavLinksContainer, LogoContainer, NavLink } from "./navigation.styles";
import { selectCurrentUser } from '../../store/user/user.selectors'
import { selectCartState } from '../../store/cart/cart.selectors'
import { signOutStart } from '../../store/user/user.action'


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartState = useSelector(selectCartState)
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());
  return (
    <Fragment> {/*Renders nothing. Replaces a wrapping div in this instance*/}
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {
            currentUser ? (
              <NavLink as='span' className="nav-link" onClick={signOutUser}>Sign Out</NavLink>
            ) : (<NavLink className="nav-link" to="/auth">Sign In</NavLink>)
          }
          <CartIcon />
        </NavLinksContainer>
        { cartState && <CartDropdown /> }
        </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
