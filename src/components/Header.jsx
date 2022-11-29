import React from "react";
import headerStyles from "../styles/header.css";
import wiicarIcon from "./../icons/wiicar-icon.png";
import menuIcon from "./../icons/menu.png";
import turnOffIcon from "./../icons/apagar.png";

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={menuIcon} alt="menu-icon.png" />
                    </a>
                    <a className="navbar-brand" href="#">
                        <span>
                            <img
                                className="logo"
                                src={wiicarIcon}
                                alt="logo.png"
                            />
                        </span>
                        <span>Wiicar</span>
                    </a>

                    <button>
                        <img src={turnOffIcon} alt="turnoff-icon.png" />
                        <a href="#">Salir</a>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Header;
