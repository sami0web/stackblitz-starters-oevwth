
import React from 'react';
import { NavLink } from 'react-router-dom';
import Pokeballe from './Pokeballe.js'
import { useSelector } from 'react-redux';
export default function Header() {
  
  const items = useSelector(state => state.shopping.Items);
  https://icons8.com/icon/45674/pokeball
 
  

  return (
    
    <nav className="navbar navbar-expand-md navbar-dark bg-dark     sticky-top     ">
    <div className="container-fluid">

    <NavLink className="navbar-brand" exact to="/Home">P{<Pokeballe sens="+"/>}kéSt{<Pokeballe sens="-"/>}re
    </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>




        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page"  exact to="/Home">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link"  exact to="/Cart">Cart({items.length})<i className="bi bi-cart3"></i></NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"  /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
             
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>


    
 )
}
