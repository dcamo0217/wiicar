import React from "react";
import "./../styles/nav.css";

const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-around">
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="/#">
                        Preparación
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        Almacenamiento
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        En venta
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">
                        Vendido
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Nav;
