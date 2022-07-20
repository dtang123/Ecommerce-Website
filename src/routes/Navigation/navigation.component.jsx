import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { NavigationContainer, NavLinksContainer, LogoContainer, NavLink } from "./navigation.styles";
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/cart.context'


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartState } = useContext(CartContext);
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
