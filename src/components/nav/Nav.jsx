import React from "react";
import "./../../styles/nav.css";
import NavItem from "./NavItem";
import iconPrep from "./../../assets/img/car-wrench-solid.svg";
import iconAlm from "./../../assets/img/car-garage-solid.svg";
import iconVent from "./../../assets/img/tags-regular.svg";
import iconVend from "./../../assets/img/money-bill-transfer-regular.svg";

const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-around">
                <NavItem icon={iconPrep} name="Preparación" />
                <NavItem icon={iconAlm} name="Almacenamiento" />
                <NavItem icon={iconVent} name="En venta" />
                <NavItem icon={iconVend} name="Vendido" />
            </ul>
        </>
    );
};

export default Nav;
