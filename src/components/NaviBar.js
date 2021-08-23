import React from "react";
import NaviBar from "./components/NaviBar";
import {Link,Switch,Route,BrowserRouter as Router}  from "react-router-dom"
import Cart from "./Cart";
import Shop from "./Shop";

import SignUp from "./SignUp";

const NaviBar = () => {
  return (

    <Router>
      <header className="header">
      <nav className="navBar" >
        <a className="logo-nav">LOGO</a>
          <ul className="menu-nav">
            <Link className="link-nav" to="/">Home</Link>
            <Link className="link-nav" to="/Cart">Cart</Link>
            <Link className="link-nav" to="/SignUp">SignUp</Link>
           </ul> 
      </nav>
    </header>

     <Switch>
    <Route exact path="/">
    <Shop></Shop>
      </Route>

    <Route  path="/Cart">
    <Cart></Cart>
    </Route>

    <Route  path="/SignUp">
    <SignUp></SignUp>
    </Route>
    
       </Switch>
      
    </Router>
   

  );
}

export default  NaviBar;
