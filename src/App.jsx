import React from 'react'
import { HashRouter as Router , Routes ,Route } from 'react-router-dom' 
import Home from './Pages/Home.jsx' 
import Account from './Pages/Account.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import AllProducts from './Pages/AllProducts.jsx' 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/all-products' element={<AllProducts />} />
      </Routes>
    </Router>
  )
}

export default App
