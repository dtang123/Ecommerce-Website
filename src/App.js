import React from 'react'
import Home from "./routes/home/home.component"
import { Routes, Route} from "react-router-dom"
import Navigation from "./routes/Navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"


const Shop = () => {
  return <h1>This is the shop</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> {/*index renders home with same path as parent*/}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
