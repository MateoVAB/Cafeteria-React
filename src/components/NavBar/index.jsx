import React from "react";
import CartWidget from '../CartWidget/index'
import { NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="container">
           <nav className="nav">
               <div className="nav-brand">
                  <NavLink className="nav-link" to="/">Inicio</NavLink>
                  </div>
                  <ul className="nav-list">                                                                                                                                                                                          
                  <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </NavLink>
                    <ul class="dropdown-menu">
                        <li><NavLink class="dropdown-item" to="/categoria/granos"href="#">Granos</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/categoria/extras"href="#">Extras</NavLink></li>
                       
                    </ul>
                    </li>
                    <li>
                        <NavLink className="nav-link" href="#">Contacto</NavLink>

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