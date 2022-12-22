import React from "react";
import CartWidget from '../CartWidget/index'
import { NavLink} from 'react-router-dom'
import "./NavBar.module.css"

export const NavBar = () => {
    return (
        <div className="container">
           <nav className="nav">
               <div className="nav-brand">
                  <NavLink className="nav-link" to="/">Inicio</NavLink>
                  </div>
                  <ul className="nav-list">                                                                                                                                                                                          
                  <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle" to="/categoria/ItemListContainer">
                        Productos
                    </NavLink>
                  
                    </li>
                   
                    <li>
                        <NavLink className="nav-link" to='cart'>
                            <CartWidget />
                        </NavLink>

                    </li>
                  </ul>
                  
           </nav>
           </div>
    );
}


export default NavBar