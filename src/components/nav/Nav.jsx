import React from "react";
import "./../../styles/nav.css";
import NavItem from "./NavItem";

const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-around">
                <NavItem name="Preparación" />
                <NavItem name="Almacenamiento" />
                <NavItem name="En venta" />
                <NavItem name="Vendido" />
            </ul>
        </>
    );
};

export default Nav;
