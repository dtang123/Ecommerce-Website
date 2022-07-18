import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss";
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/cart.context'


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartState } = useContext(CartContext);
  return (
    <Fragment> {/*Renders nothing. Replaces a wrapping div in this instance*/}
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign Out</span>
            ) : (<Link className="nav-link" to="/auth">Sign In</Link>)
          }
          <CartIcon />
        </div>
        { cartState && <CartDropdown /> }
        </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
