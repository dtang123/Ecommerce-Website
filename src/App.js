import React from 'react'
import Home from "./routes/home/home.component"
import { Routes, Route} from "react-router-dom"
import Navigation from "./routes/Navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component"
import Checkout from './routes/checkout/checkout.component'

import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const unsubscribe = onAuthStateChangeListener((user) => {
    //   if (user) {
    //     createUserDocFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user))
    // })
    //
    // return unsubscribe
    dispatch(checkUserSession())
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> {/*index renders home with same path as parent*/}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
