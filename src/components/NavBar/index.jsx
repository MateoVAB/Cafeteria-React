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
                    <li>
                        <NavLink className="nav-link" to="/productos">Productos</NavLink>
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