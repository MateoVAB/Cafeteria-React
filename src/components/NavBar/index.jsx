import React from "react";
import CartWidget from "../CartWidget";


export const NavBar = () => {
    return (
        <div className="container">
           <nav className="nav">
               <div className="nav-brand">
                  <a className="nav-link" href="#">Inicio</a>
                  </div>
                  <ul className="nav-list">
                    <li>
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Productos</a>
                        
                    </li>  
                    <li>
                        <a className="nav-link" href="#">Buscanos</a>
                    
                    </li> 
                    <li>
                        <a className="nav-link" href="#">Contacto</a>

                    </li>
                    <li>
                        <a className="nav-link" href="#">
                            <CartWidget />
                        </a>

                    </li>
                  </ul>
                  
           </nav>
           </div>
    );
}


export default NavBar