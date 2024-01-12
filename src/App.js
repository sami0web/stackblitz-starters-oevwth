import React from "react";
import "./style.css";
import Header from './Component/Header.js'
import Body from './Component/Body.js'
import Cart from './Component/Cart.js'
import Footer from './Component/Footer.js'


import {Route ,Routes, Switch,NavLink,Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
     

<Header/>


<Routes>

        <Route exact path="/" element={<Body/>} />
        <Route path="/Home" element={<Body/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="*" element={<Body/>} />

</Routes>

<Footer/>
     
    </div>
  );
}
